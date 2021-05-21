import random
import json
from keras.models import load_model
import numpy as np
import pickle
import nltk
from nltk.stem import WordNetLemmatizer
from datetime import datetime


class Chat():

    lemmatizer = WordNetLemmatizer()
    model = load_model('static/Chatbot/chatbot_model.h5')
    intents = json.loads(open('static/Chatbot/Intent.json').read())
    words = pickle.load(open('static/Chatbot/words.pkl', 'rb'))
    classes = pickle.load(open('static/Chatbot/classes.pkl', 'rb'))
    response_json = {}

    def __init__(self):
        self.time = datetime.now().strftime("%H:%M")
        self.day = datetime.now().strftime("%A")
        self.date = datetime.now().strftime("%B %d, %Y")
        self.response_json['response'] = ""

    def clean_up_sentence(self, sentence):
        sentence_words = nltk.word_tokenize(sentence)
        sentence_words = [self.lemmatizer.lemmatize(
            word.lower()) for word in sentence_words]
        return sentence_words

    def bow(self, sentence, words, show_details=True):
        sentence_words = self.clean_up_sentence(sentence)
        bag = [0]*len(words)
        for s in sentence_words:
            for i, w in enumerate(words):
                if w == s:
                    bag[i] = 1
                    if show_details:
                        pass
                        # print ("found in bag: %s" % w)
        return(np.array(bag))

    def predict_class(self, sentence):
        p = self.bow(sentence, self.words, show_details=False)
        res = self.model.predict(np.array([p]))[0]
        ERROR_THRESHOLD = 0.25
        results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
        results.sort(key=lambda x: x[1], reverse=True)
        return_list = []
        for r in results:
            return_list.append(
                {"intent": self.classes[r[0]], "probability": str(r[1])})
        return return_list

    def getResponse(self, ints):
        tag = ints[0]['intent']
        list_of_intents = self.intents['intents']
        for i in list_of_intents:
            if(i['intent'] == tag):
                result = random.choice(i['responses'])
                break
        return result

    def chatbot_response(self, text):
        ints = self.predict_class(text)
        res = self.getResponse(ints)
        return res

    def getValidatedResponse(self, res):
        try:
            if res.find("<TIME>") != -1:
                res = res.replace("<TIME>", self.time)
            elif res.find("<DAY>") != -1:
                res = res.replace("<DAY>", self.day)
            elif res.find("<DATE>") != -1:
                res = res.replace("<DATE>", self.date)
        except:
            pass
        return res

    def getChatbotResponse(self, msg):
        res = self.chatbot_response(msg)
        self.response_json['response'] = self.getValidatedResponse(res)
        return(self.response_json)
