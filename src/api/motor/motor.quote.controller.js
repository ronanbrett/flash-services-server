"use strict";
const BENEFITS = [
    { description: 'Lifetime Glass', inHeader: true, included: true },
    { description: 'Theft & Protection', inHeader: true, included: true },
    { description: 'Windscreen Cover', inHeader: true, included: true },
    { description: 'Personal Accident', inHeader: false, included: true },
    { description: 'Blah', inHeader: false, included: true },
    { description: 'Blah', inHeader: false, included: false }
];
const BREAKDOWN_ITEMS = [
    { description: 'AA Motor', price: createPrice(5000) },
    { description: 'Fee', price: createPrice(320) },
    { description: 'Member Discount', price: createPrice(5000), discount: true },
];
const AAValue = {
    name: 'AA Value',
    id: 'AAVALUE',
    benefits: BENEFITS,
    breakdown: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(2999),
            installments: {
                number: 11,
                instalment: createPrice(5999)
            },
            total: createPrice(5999),
            apr: '10%'
        },
        annually: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(151000)
            },
            total: createPrice(151000),
            apr: '4.5%',
        }
    }
};
const AAMotor = {
    name: 'AA Motor',
    id: 'AAMOTOR',
    benefits: BENEFITS,
    breakdown: BREAKDOWN_ITEMS,
    premium: {
        monthly: {
            deposit: createPrice(4999),
            installments: {
                number: 11,
                instalment: createPrice(6999)
            },
            total: createPrice(6999),
            apr: '10%'
        },
        annually: {
            deposit: createPrice(0),
            installments: {
                number: 1,
                instalment: createPrice(125000)
            },
            total: createPrice(125000),
            apr: '4.5%',
        }
    }
};
const quote = {
    reference: '56565656',
    products: [AAMotor, AAValue],
    paymentFrequency: 'monthly',
    activeProduct: null
};
class MotorQuote {
    constructor() {
    }
    sendQuote(req, res) {
        res.status(200).send(JSON.stringify({ quote: quote }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MotorQuote;
function createPrice(price) {
    return {
        "amount": price,
        "str": `${price / 100}`,
        "symbol": "€",
        "currency": "EUR",
        "pretty": `€${price / 100}`
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvbW90b3IvbW90b3IucXVvdGUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBT0EsTUFBTSxRQUFRLEdBQUc7SUFDaEIsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ2pFLEVBQUUsV0FBVyxFQUFFLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUNyRSxFQUFFLFdBQVcsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDbkUsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3JFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUU7SUFDeEQsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtDQUN6RCxDQUFBO0FBRUQsTUFBTSxlQUFlLEdBQUc7SUFDdkIsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDckQsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDL0MsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0NBQzNFLENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxVQUFVO0lBQ2hCLEVBQUUsRUFBRSxTQUFTO0lBQ2IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsT0FBTyxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1IsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsWUFBWSxFQUFFO2dCQUNiLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDeEIsR0FBRyxFQUFFLEtBQUs7U0FFVjtRQUNELFFBQVEsRUFBRTtZQUNULE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFlBQVksRUFBRTtnQkFDYixNQUFNLEVBQUUsQ0FBQztnQkFDVCxVQUFVLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUMvQjtZQUNELEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxNQUFNO1NBQ1g7S0FDRDtDQUNELENBQUE7QUFFRCxNQUFNLE9BQU8sR0FBRztJQUNmLElBQUksRUFBRSxVQUFVO0lBQ2hCLEVBQUUsRUFBRSxTQUFTO0lBQ2IsUUFBUSxFQUFFLFFBQVE7SUFDbEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsT0FBTyxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ1IsT0FBTyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDMUIsWUFBWSxFQUFFO2dCQUNiLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFVBQVUsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQzdCO1lBQ0QsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDeEIsR0FBRyxFQUFFLEtBQUs7U0FFVjtRQUNELFFBQVEsRUFBRTtZQUNULE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLFlBQVksRUFBRTtnQkFDYixNQUFNLEVBQUUsQ0FBQztnQkFDVCxVQUFVLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQzthQUMvQjtZQUNELEtBQUssRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQzFCLEdBQUcsRUFBRSxNQUFNO1NBQ1g7S0FDRDtDQUNELENBQUE7QUFFRCxNQUFNLEtBQUssR0FBRztJQUNiLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLFFBQVEsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7SUFDNUIsZ0JBQWdCLEVBQUUsU0FBUztJQUMzQixhQUFhLEVBQUUsSUFBSTtDQUNuQixDQUFBO0FBRUQ7SUFDQztJQUFnQixDQUFDO0lBRWpCLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO1FBQ3BELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7QUFDRixDQUFDO0FBTkQ7NEJBTUMsQ0FBQTtBQUVELHFCQUFxQixLQUFhO0lBQ2pDLE1BQU0sQ0FBQztRQUNOLFFBQVEsRUFBRSxLQUFLO1FBQ2YsS0FBSyxFQUFFLEdBQUcsS0FBSyxHQUFHLEdBQUcsRUFBRTtRQUN2QixRQUFRLEVBQUUsR0FBRztRQUNiLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFFBQVEsRUFBRSxJQUFJLEtBQUssR0FBRyxHQUFHLEVBQUU7S0FDM0IsQ0FBQTtBQUNGLENBQUMiLCJmaWxlIjoiYXBpL21vdG9yL21vdG9yLnF1b3RlLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6W251bGxdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==