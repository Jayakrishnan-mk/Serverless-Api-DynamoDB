import { DynamoDBClient, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDBClient({});
const tableName = process.env.SAMPLE_TABLE;

export const updateItemHandler = async (event) => {
    try {
        const { id, name } = JSON.parse(event.body);

        if (!id || !name) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: 'Missing id or name' }),
            };
        }

        const command = new UpdateItemCommand({
            TableName: tableName,
            Key: marshall({ id }),
            UpdateExpression: 'SET #name = :nameVal',
            ExpressionAttributeNames: { '#name': 'name' },
            ExpressionAttributeValues: marshall({ ':nameVal': name }),
            ReturnValues: 'ALL_NEW',
        });

        await client.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Item updated successfully" }),
        };
    } catch (err) {
        console.error('Update failed:', err);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
