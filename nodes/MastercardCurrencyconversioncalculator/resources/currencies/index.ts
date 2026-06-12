import type { INodeProperties } from 'n8n-workflow';

export const currenciesDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Currencies"
					]
				}
			},
			"options": [
				{
					"name": "Get Currency Rate Data Using GET",
					"value": "Get Currency Rate Data Using GET",
					"action": "getCurrencyRateData",
					"description": "List of supported currencies.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/settlement-currencies"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /settlement-currencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Currencies"
					],
					"operation": [
						"Get Currency Rate Data Using GET"
					]
				}
			}
		},
];
