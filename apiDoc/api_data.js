define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/products/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodName",
            "description": "<p>prodName of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodBrand",
            "description": "<p>prodBrand of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isFeatured",
            "description": "<p>isFeatured of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imgUrl",
            "description": "<p>imgUrl of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otherImgs",
            "description": "<p>urls of the product images separated with commas passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "availability",
            "description": "<p>availability of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Product successfully created\",\n            \"status\": 200,\n            \"data\": {\n                \"type\": string,\n                \"category\": string,\n                \"subCategory\": string,\n                \"prodName\": string,\n                \"prodBrand\": string,\n                \"isFeatured\": boolean,\n                \"description\": string,\n                \"price\": number,\n                \"imgUrl\": string,\n                \"otherImgs\": object(type = array),\n                \"availability\": boolean,\n                \"_id\": string,\n                \"prodId\": string,\n                \"productCreated\": string,\n                \"reviews\": object(type = array),\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured saving the product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Create",
    "name": "PostApiV1ProductsCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:prodId/review/:userId",
    "title": "Create review",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user adding review passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>comment of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rating",
            "description": "<p>rating of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Comment successfully added\",\n            \"status\": 200,\n            \"data\": {\n                \"type\": string,\n                \"category\": string,\n                \"subCategory\": string,\n                \"prodName\": string,\n                \"prodBrand\": string,\n                \"isFeatured\": boolean,\n                \"description\": string,\n                \"price\": number,\n                \"imgUrl\": string,\n                \"otherImgs\": object(type = array),\n                \"availability\": boolean,\n                \"_id\": string,\n                \"prodId\": string,\n                \"productCreated\": string,\n                \"reviews\": [\n                    {\n                        \"rating\": number,\n                        \"postedTime\": string,\n                        \"_id\": string,\n                        \"reviewId\": string,\n                        \"userId\": string,\n                        \"comment\": string\n                    }\n                ],\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while adding the review\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Create",
    "name": "PostApiV1ProductsProdidReviewUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/address/:userId",
    "title": "Create address of the user",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "houseNo",
            "description": "<p>houseNo of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "street",
            "description": "<p>street of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "area",
            "description": "<p>area of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pincode",
            "description": "<p>pincode of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Address successfully added\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": object(type = array),\n                \"addresses\": [\n                    {\n                        \"_id\": string,\n                        \"addressId\": string,\n                        \"houseNo\": number,\n                        \"street\": string,\n                        \"area\": string,\n                        \"city\": string,\n                        \"pincode\": number\n                    }\n                ],\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while adding the address\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Create",
    "name": "PostApiV1UsersAddressUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/create",
    "title": "Create User",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contactNumber",
            "description": "<p>contactNumber of the user passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"User successfully created\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": object(type = array),\n                \"addresses\": object(type = array),\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured saving the user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Create",
    "name": "PostApiV1UsersCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/cart/:prodId",
    "title": "Create Product in cart",
    "version": "0.0.1",
    "group": "Create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Product successfully added to cart\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": [\n                    {\n                        \"quantity\": 1,\n                        \"prodId\": string\n                    }\n                ],\n                \"addresses\": object(type = array),\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while adding to cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Create",
    "name": "PostApiV1UsersUseridCartProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/delete/:prodId",
    "title": "Delete Product",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Product successfully deleted\",\n           \"status\": 200,\n           \"data\": {\n               \"n\": 1,\n               \"ok\": 1\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error occured while deleting the product\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Delete",
    "name": "PostApiV1ProductsDeleteProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:prodId/deleteReview/:reviewId",
    "title": "Delete Review",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewId",
            "description": "<p>reviewId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Review deleted\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while deleting the review\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Delete",
    "name": "PostApiV1ProductsProdidDeletereviewReviewid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete/:userId",
    "title": "Delete user",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"User successfully deleted\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while deleting the user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Delete",
    "name": "PostApiV1UsersDeleteUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/deleteAddress/:addressId",
    "title": "Delete address of the user",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "addressId",
            "description": "<p>addressId of the user passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Address successfully deleted\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while deleting the address\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Delete",
    "name": "PostApiV1UsersUseridDeleteaddressAddressid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/deleteCart/:prodId",
    "title": "Delete Product from cart",
    "version": "0.0.1",
    "group": "Delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Product successfully removed from cart\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while removing from cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Delete",
    "name": "PostApiV1UsersUseridDeletecartProdid"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get All Products",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n            \"error\": false,\n            \"message\": \"Products Found\",\n            \"status\": 200,\n            \"data\": [\n                {\n                    \"type\": string,\n                    \"category\": string,\n                    \"subCategory\": string,\n                    \"prodName\": string,\n                    \"prodBrand\": string,\n                    \"isFeatured\": boolean,\n                    \"description\": string,\n                    \"price\": number,\n                    \"imgUrl\": string,\n                    \"otherImgs\":object(type = array),\n                    \"availability\": boolean,\n                    \"prodId\": string,\n                    \"productCreated\": string,\n                    \"reviews\": object(type = array)\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting all the products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/category/:category",
    "title": "Get Products by Category",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n            \"error\": false,\n            \"message\": \"Products Found\",\n            \"status\": 200,\n            \"data\":{\n                    \"type\": string,\n                    \"category\": string,\n                    \"subCategory\": string,\n                    \"prodName\": string,\n                    \"prodBrand\": string,\n                    \"isFeatured\": boolean,\n                    \"description\": string,\n                    \"price\": number,\n                    \"imgUrl\": string,\n                    \"otherImgs\":object(type = array),\n                    \"availability\": boolean,\n                    \"prodId\": string,\n                    \"productCreated\": string,\n                    \"reviews\": object(type = array)\n                }   \n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting all the products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsCategoryCategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/subCategory/:subCategory",
    "title": "Get Products by SubCategory",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategory",
            "description": "<p>subCategory of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n            \"error\": false,\n            \"message\": \"Products Found\",\n            \"status\": 200,\n            \"data\":{\n                    \"type\": string,\n                    \"category\": string,\n                    \"subCategory\": string,\n                    \"prodName\": string,\n                    \"prodBrand\": string,\n                    \"isFeatured\": boolean,\n                    \"description\": string,\n                    \"price\": number,\n                    \"imgUrl\": string,\n                    \"otherImgs\":object(type = array),\n                    \"availability\": boolean,\n                    \"prodId\": string,\n                    \"productCreated\": string,\n                    \"reviews\": object(type = array)\n                }   \n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting all the products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsSubcategorySubcategory"
  },
  {
    "type": "get",
    "url": "/api/v1/products/type/:type",
    "title": "Get Products by Type",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n            \"error\": false,\n            \"message\": \"Products Found\",\n            \"status\": 200,\n            \"data\":{\n                    \"type\": string,\n                    \"category\": string,\n                    \"subCategory\": string,\n                    \"prodName\": string,\n                    \"prodBrand\": string,\n                    \"isFeatured\": boolean,\n                    \"description\": string,\n                    \"price\": number,\n                    \"imgUrl\": string,\n                    \"otherImgs\":object(type = array),\n                    \"availability\": boolean,\n                    \"prodId\": string,\n                    \"productCreated\": string,\n                    \"reviews\": object(type = array)\n                }   \n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting all the products\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsTypeType"
  },
  {
    "type": "get",
    "url": "/api/v1/products/view/:prodId",
    "title": "Get Single Product",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n           \"error\": false,\n           \"message\": \"Product Found\",\n           \"status\": 200,\n           \"data\":{\n                   \"type\": string,\n                   \"category\": string,\n                   \"subCategory\": string,\n                   \"prodName\": string,\n                   \"prodBrand\": string,\n                   \"isFeatured\": boolean,\n                   \"description\": string,\n                   \"price\": number,\n                   \"imgUrl\": string,\n                   \"otherImgs\":object(type = array),\n                   \"availability\": boolean,\n                   \"prodId\": string,\n                   \"productCreated\": string,\n                   \"reviews\": object(type = array)\n               }   \n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error occured while getting Single product\",\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Read",
    "name": "GetApiV1ProductsViewProdid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/all",
    "title": "Get All Users",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Users found\",\n            \"status\": 200,\n            \"data\": [\n                    {\n                    \"isPrime\": boolean,\n                    \"userId\": string,\n                    \"firstName\": string,\n                    \"lastName\": string,\n                    \"emailId\": string,\n                    \"password\": string,\n                    \"contactNumber\": number,\n                    \"cart\": object(type = array),\n                    \"addresses\": object(type = array),\n                }\n            ]\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting all the users\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Read",
    "name": "GetApiV1UsersAll"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/:userId",
    "title": "Get Single User",
    "version": "0.0.1",
    "group": "Read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"User found\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": object(type = array),\n                \"addresses\": object(type = array),\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while getting the user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Read",
    "name": "GetApiV1UsersViewUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/products/:prodId/editComment/:reviewId",
    "title": "Update Comment",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reviewId",
            "description": "<p>reviewId of the product passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>comment of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Review successfully edited\",\n            \"status\": 200,\n            \"data\": {\n                \"type\": string,\n                \"category\": string,\n                \"subCategory\": string,\n                \"prodName\": string,\n                \"prodBrand\": string,\n                \"isFeatured\": boolean,\n                \"description\": string,\n                \"price\": number,\n                \"imgUrl\": string,\n                \"otherImgs\": object(type = array),\n                \"availability\": boolean,\n                \"_id\": string,\n                \"prodId\": string,\n                \"productCreated\": string,\n                \"reviews\": [\n                    {\n                        \"rating\": number,\n                        \"postedTime\": string,\n                        \"_id\": string,\n                        \"reviewId\": string,\n                        \"userId\": string,\n                        \"comment\": string\n                    }\n                ],\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while editing the comment\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Update",
    "name": "PostApiV1ProductsProdidEditcommentReviewid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/decreaseQty/:prodId",
    "title": "Decreasing quantity of cart by 1",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Quantity successfully decreased\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": [\n                    {\n                        \"quantity\": number,\n                        \"prodId\": string\n                    }\n                ],\n                \"addresses\": object(type = array),\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while decreasing quantity\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Update",
    "name": "PostApiV1UsersUseridDecreaseqtyProdid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/editAddress/:addressId",
    "title": "Update address of the user",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "addressId",
            "description": "<p>addressId of the user passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Address successfully updated\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": object(type = array),\n                \"addresses\": [\n                    {\n                        \"_id\": string,\n                        \"addressId\": string,\n                        \"houseNo\": number,\n                        \"street\": string,\n                        \"area\": string,\n                        \"city\": string,\n                        \"pincode\": number\n                    }\n                ],\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while updating the address\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Update",
    "name": "PostApiV1UsersUseridEditaddressAddressid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/:userId/increaseQty/:prodId",
    "title": "Increasing quantity of cart by 1",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"Quantity successfully increased\",\n            \"status\": 200,\n            \"data\": {\n                \"isPrime\": boolean,\n                \"_id\": string,\n                \"userId\": string,\n                \"firstName\": string,\n                \"lastName\": string,\n                \"emailId\": string,\n                \"password\": string,\n                \"contactNumber\": number,\n                \"cart\": [\n                    {\n                        \"quantity\": number,\n                        \"prodId\": string\n                    }\n                ],\n                \"addresses\": object(type = array),\n                \"__v\": number\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while increasing quantity\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Update",
    "name": "PostApiV1UsersUseridIncreaseqtyProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/products/edit/:prodId",
    "title": "Update Product",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "prodId",
            "description": "<p>prodId of the product passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n            \"error\": false,\n            \"message\": \"Product successfully updated\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while editing the Product\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/products.js",
    "groupTitle": "Update",
    "name": "PutApiV1ProductsEditProdid"
  },
  {
    "type": "put",
    "url": "/api/v1/users/edit/:userId",
    "title": "Update User Credentials",
    "version": "0.0.1",
    "group": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user passed as a route parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n            \"error\": false,\n            \"message\": \"User successfully updated\",\n            \"status\": 200,\n            \"data\": {\n                \"n\": 1,\n                \"nModified\": 1,\n                \"ok\": 1\n            }\n        }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error occured while updating the Credentials\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/users.js",
    "groupTitle": "Update",
    "name": "PutApiV1UsersEditUserid"
  }
] });
