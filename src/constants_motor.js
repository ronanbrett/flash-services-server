"use strict";
exports.QUESTIONS = {
    pre: [{
            key: 'email',
            label: 'What is your email?',
            type: 'email',
            required: true,
            order: 0
        }, {
            key: 'amountOfDrivers',
            label: 'How many drivers?',
            type: 'counter',
            required: true,
            // disabled: true,
            order: 1,
            // value: 1,
            min: 0,
            max: 10
        }, {
            key: 'termsConditions',
            label: 'Terms and Conditions',
            type: 'questionText',
            order: 2,
            timeline: false,
            content: `By providing the requested data, you consent to AA's Data Protection and Privacy Policy and to AA using it for administration and keeping you informed by mail, telephone, email and SMS of other products and services from us. By proceeding, you consent to & confirm that you have read and accepted the AA Data Protection & Privacy Policy and the AA Terms & Conditions`
        }],
    details: [{
            key: 'firstName',
            label: 'First Name',
            type: 'text',
            required: true,
            helpId: 214205625,
            placeholder: 'John',
            order: 0,
        }, {
            key: 'lastName',
            label: 'Last Name',
            placeholder: 'Snow',
            type: 'text',
            helpId: 213679469,
            required: true,
            order: 1
        }, {
            key: 'dateOfBirth',
            label: 'Date Of Birth',
            type: 'date',
            required: true,
            helpId: 213685289,
            disabled: false,
            order: 2,
            validators: ['validDateValidate', 'validOverEighteenValidate']
        }, {
            key: 'phoneNumber',
            label: 'Phone Number',
            type: 'tel',
            required: true,
            disabled: true,
            helpId: 214224585,
            order: 2,
            validators: ['validPhoneNumberValidate']
        },
        {
            key: 'typeOfEmployment',
            label: 'Type of Employment',
            type: 'dropdown',
            options: ['Employed', 'Household Duties', 'Retired', 'Self Employed', 'Unemployed'],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'occupation',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 2,
            validators: []
        },
        {
            key: 'business',
            label: 'Type of Business',
            type: 'autocomplete',
            placeholder: 'Select an Area of Business',
            trigger: {
                key: 'occupation',
                name: 'occupation',
            },
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'livedOutsideIreland',
            label: 'Have you lived outside the Republic of Ireland or the UK in the last 12 months?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'amountOfDrivers',
            label: 'How many drivers?',
            type: 'slider',
            required: true,
            disabled: false,
            order: 10,
            // values: [5, 6, 11, 12],
            value: 2,
            // steps: 1,
            min: 0,
            max: 7
        },
        {
            key: 'occupation3',
            label: 'Occupation',
            type: 'autocomplete',
            placeholder: 'Select an Occupation',
            serviceUrl: 'motor/occupation/',
            autoCompleteType: 'search',
            options: [
                { id: 'Employed', text: 'Employed' },
                { id: 'Household Duties', text: 'Household Duties' },
                { id: 'Retired', text: 'Retired' },
                { id: 'Self Employed', text: 'Self Employed' },
                { id: 'Unemployed', text: 'Unemployed' },
                { id: 'Very Employed', text: 'Very Employed' },
                { id: 'Very Household Duties', text: 'Very Household Duties' },
                { id: 'Very Retired', text: 'Very Retired' },
                { id: 'Very Self Employed', text: 'Very Self Employed' }
            ],
            required: true,
            disabled: false,
            // value: { id: 'Employed', text: 'Employed' },
            order: 99992,
            validators: []
        }],
    defaultClaimQuestion: [{
            key: 'customerClaims',
            label: 'Have you had any claims in the past 3 years?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        }],
    claims: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        },
        {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            required: true,
            placeholder: 'How Much',
            order: 0,
        },
        {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            order: 2,
            validators: []
        }],
    claimWithValues: [{
            key: 'dateOfClaim',
            label: 'When was the claim?',
            type: 'date',
            required: true,
            disabled: false,
            value: '01/01/1997',
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        },
        {
            key: 'reasonForClaim',
            label: 'What was the reason for the claim?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            value: 'Accident',
            order: 0,
            validators: []
        },
        {
            key: 'costOfClaim',
            label: 'Cost of claim',
            type: 'currency',
            value: '5000',
            required: true,
            placeholder: 'How Much',
            order: 0,
        },
        {
            key: 'customerAtFault',
            label: 'Were you at fault?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        },
        {
            key: 'noClaimsBonusProtected',
            label: 'Was your no claims bonus protected?',
            type: 'radio',
            options: [{ value: 'Yes', text: 'Yes' }, { value: 'No', text: 'No' }],
            required: true,
            value: 'Yes',
            order: 2,
            validators: []
        }],
    penalties: [{
            key: 'dateOfPenalty',
            label: 'When was it?',
            type: 'date',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        },
        {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'howManyPoints',
            label: 'How many points?',
            type: 'text',
            required: true,
            placeholder: 'How Much',
            order: 0,
        }],
    penaltiesWithValues: [{
            key: 'dateOfPenalty',
            label: 'When was it?',
            type: 'date',
            value: '01/01/2016',
            required: true,
            disabled: false,
            order: 0,
            validators: ['validDateValidate', 'validLastThreeYearsValidate']
        },
        {
            key: 'reasonForPenalty',
            label: 'What was the reason?',
            type: 'dropdown',
            options: ['Accident', 'Accidental Damage', 'Fire', 'Malicious Damage As A Result Of Theft', 'Personal Accident', 'Personal Effects', 'Theft', 'Third Party', 'Vandalism', 'Windscreen'],
            value: 'Accident',
            required: true,
            order: 0,
            validators: []
        },
        {
            key: 'howManyPoints',
            label: 'How many points?',
            type: 'text',
            required: true,
            value: '5',
            placeholder: 'How Much',
            order: 0,
        }]
};
exports.PAGES = [{
        id: 'pre',
        title: 'Pre',
        order: 0,
        templates: {},
        sections: [
            {
                id: 'pre-default',
                type: 'default',
                fields: exports.QUESTIONS.pre
            },
            {
                id: 'pre-alt',
                type: 'alt',
                fields: exports.QUESTIONS.pre
            }
        ]
    }, {
        id: 'details',
        title: 'Details',
        order: 1,
        templates: {
            additionalDrivers: {
                type: 'additionalDrivers',
                max: 5,
                optional: true,
                fields: exports.QUESTIONS.details
            }
        },
        sections: [
            {
                id: 'details-default',
                type: 'default',
                fields: exports.QUESTIONS.details
            }
        ]
    },
    {
        id: 'claims',
        title: 'Claims',
        order: 1,
        templates: {
            claim: {
                type: 'claim',
                userHasClaim: null,
                optional: true,
                fields: exports.QUESTIONS.claims
            },
        },
        sections: [
            {
                id: 'claim-primary-driver',
                title: 'Main Driver',
                userHasClaim: true,
                type: 'claim',
                fields: [
                    {
                        key: '0',
                        type: 'claim',
                        isComplete: true,
                        fields: exports.QUESTIONS.claimWithValues
                    }
                ]
            },
        ]
    },
    {
        id: 'penalties',
        title: 'Penalty Points',
        order: 1,
        templates: {
            penalty: {
                type: 'penalty',
                userHasPenalty: null,
                optional: true,
                fields: exports.QUESTIONS.penalties
            },
        },
        sections: [
            {
                id: 'penalty-primary-driver',
                title: 'Main Driver',
                userHasPenalty: false,
                type: 'penalty',
                fields: []
            },
        ]
    }];
exports.CONFIG = {
    stages: [{
            id: 'quotation',
            title: 'quotation',
            pages: exports.PAGES
        }]
};

//# sourceMappingURL=data:application/json;base64,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RTtvQkFDUDt3QkFDQyxHQUFHLEVBQUUsR0FBRzt3QkFDUixJQUFJLEVBQUUsT0FBTzt3QkFDYixVQUFVLEVBQUUsSUFBSTt3QkFDaEIsTUFBTSxFQUFFLGlCQUFTLENBQUMsZUFBZTtxQkFDakM7aUJBQ0Q7YUFDRDtTQWVEO0tBQ0Q7SUFDRDtRQUNDLEVBQUUsRUFBRSxXQUFXO1FBQ2YsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLFNBQVMsRUFBRTtZQUNWLE9BQU8sRUFBRTtnQkFDUixJQUFJLEVBQUUsU0FBUztnQkFDZixjQUFjLEVBQUUsSUFBSTtnQkFDcEIsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsTUFBTSxFQUFFLGlCQUFTLENBQUMsU0FBUzthQUMzQjtTQUNEO1FBQ0QsUUFBUSxFQUFFO1lBQ1Q7Z0JBQ0MsRUFBRSxFQUFFLHdCQUF3QjtnQkFDNUIsS0FBSyxFQUFFLGFBQWE7Z0JBQ3BCLGNBQWMsRUFBRSxLQUFLO2dCQUNyQixJQUFJLEVBQUUsU0FBUztnQkFDZixNQUFNLEVBQUUsRUFPUDthQUNEO1NBQ0Q7S0FDRCxDQUFDLENBQUM7QUFFVSxjQUFNLEdBQUc7SUFDckIsTUFBTSxFQUFFLENBQUM7WUFDUixFQUFFLEVBQUUsV0FBVztZQUNmLEtBQUssRUFBRSxXQUFXO1lBQ2xCLEtBQUssRUFBRSxhQUFLO1NBQ1osQ0FBQztDQUNGLENBQUEiLCJmaWxlIjoiY29uc3RhbnRzX21vdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOltudWxsXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
