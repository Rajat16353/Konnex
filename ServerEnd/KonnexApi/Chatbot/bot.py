class Chat():
    def __init__(self):
        self.response = {
            'response': "This is a dummy response"
        }

    def getResponseFromBot(self, message):
        self.response['response'] = message
        return self.response
