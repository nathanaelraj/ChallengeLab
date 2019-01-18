from flask import Flask
from flask import request
from watson_developer_cloud import ConversationV1
import watson_developer_cloud
conversation = ConversationV1(
  username = 'd043b7ff-c8ae-4898-8d67-0e37e6607db9',
  password = 'IKjV70Qogs67',
  version = '2017-05-26'
)
app = Flask(__name__)

@app.route('/')
def data():
    # here we want to get the value of user (i.e. ?user=some-value)
    user = request.args.get('user')
    response = conversation.message(
        workspace_id='cf333e4f-b8a2-4aed-8996-d9c5a59bf172',
        message_input={
            'text': user
        }
    )
    return response['output']['text'][0]
