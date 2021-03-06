import boto3

dynamo_client = boto3.client('dynamodb')

def getMessages():
    return dynamo_client.scan(
        TableName='Messages'
    )

def postMessage(message):
    dynamo_client.put_item(TableName='Messages', Item={'message':{'S':message}})
