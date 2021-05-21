import json
from django.http import JsonResponse, Http404
from .bot import Chat
from django.views.decorators.csrf import csrf_exempt

BAD_REQUEST = {
    'detail': "This request is not defined for this route"
}

# Create your views here.


@csrf_exempt
def getChatbotResponse(request):
    # django.middleware.csrf.get_token(request)
    if request.method != 'POST':
        Http404("")
        return JsonResponse(BAD_REQUEST, status=404)
    else:
        inputData = json.loads(request.body)
        user = Chat()
        message = dict(inputData)['message']
        return JsonResponse(user.getChatbotResponse(message))
