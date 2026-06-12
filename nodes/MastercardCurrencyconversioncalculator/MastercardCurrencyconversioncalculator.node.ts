import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { currenciesDescription } from './resources/currencies';

export class MastercardCurrencyconversioncalculator implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Mastercard Currencyconversioncalculator',
                name: 'N8nDevMastercardCurrencyconversioncalculator',
                icon: { light: 'file:./mastercard-currencyconversioncalculator.svg', dark: 'file:./mastercard-currencyconversioncalculator.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'API retrieves Mastercard currency conversion rates and amounts.',
                defaults: { name: 'Mastercard Currencyconversioncalculator' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevMastercardCurrencyconversioncalculatorApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Currencies",
					"value": "Currencies",
					"description": "Currencies"
				}
			],
			"default": ""
		},
		...currenciesDescription
                ],
        };
}
