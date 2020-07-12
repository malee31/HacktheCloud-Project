import boto3

dynamo_client = boto3.client('dynamodb')

def getMessages():
    return dynamo_client.scan(
        TableName='Messages'
    )

def postMessage():
    return dynamo_client.put-item(
        TableName='Messages',
        Message="First post in this thread"
        User="Bob"
    )
