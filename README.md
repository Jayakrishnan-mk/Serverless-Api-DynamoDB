# CRUD DynamoDB Serverless App

This project is a complete Serverless CRUD API built using **AWS SAM (Serverless Application Model)**, **Node.js**, and **DynamoDB**. It's designed for learning and demo purposes, showcasing how to build, test, and deploy a serverless backend on AWS.

---

## ✅ Features

- Create, Read, Update, Delete (CRUD) APIs
- Powered by **AWS Lambda**, **API Gateway**, and **DynamoDB**
- Local testing with `sam local`
- Deployed using `sam deploy --guided`

---

## 📁 Project Structure

```
.
├── src/            # Lambda function handlers
├── events/         # Sample event payloads for testing
├── template.yaml   # SAM template to define AWS infrastructure
```

---

## 🚀 Deploy the Application

### Prerequisites

- [Node.js 20+](https://nodejs.org/en/)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)

### Build and Deploy

```bash
sam build
sam deploy --guided
```

You’ll be prompted to enter:
- Stack name (e.g., `crud-dynamo-app`)
- Region
- Permission to create IAM roles
- Save config for future runs

---

## 🧪 Test Locally with SAM

```bash
sam local invoke putItemFunction --event events/event-post-item.json
sam local invoke getAllItemsFunction --event events/event-get-all-items.json
sam local start-api  # run local dev server at http://localhost:3000/
```

---

## 📚 Resources

- [AWS SAM Developer Guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
- [Serverless Application Repository](https://aws.amazon.com/serverless/serverlessrepo/)

---

## 🙌 Project Status

✅ **Done!**  
This project was successfully built and deployed using AWS SAM, showcasing a functional CRUD API with DynamoDB and Lambda.
