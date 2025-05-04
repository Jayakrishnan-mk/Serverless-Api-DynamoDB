// src/handlers/delete-item.mjs
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DeleteCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

export const deleteItemHandler = async (event) => {
    const tableName = process.env.SAMPLE_TABLE;
    const id = event.pathParameters?.id;

    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Missing 'id' in path parameters" }),
        };
    }

    try {
        await docClient.send(new DeleteCommand({
            TableName: tableName,
            Key: { id },
        }));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Item with id '${id}' deleted` }),
        };
    } catch (err) {
        console.error("Delete failed:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error", error: err.message }),
        };
    }
};
