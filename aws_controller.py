import boto3

dynamo_client = boto3.client('dynamodb')

def getItems():
		return dynamo_client.scan(
				TableName='Messages'
		)
