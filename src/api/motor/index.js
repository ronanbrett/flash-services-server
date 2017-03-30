"use strict";
const motor_controller_1 = require('./motor.controller');
const motor_quote_controller_1 = require('./motor.quote.controller');
class MotorRoutes {
    constructor(rout) {
        this.motor = new motor_controller_1.default();
        this.quote = new motor_quote_controller_1.default();
        this.router = rout;
        this.router.get('/motor-ux-api/motor/config', this.motor.getConfig);
        this.router.get('/motor-ux-api/motor/occupation/all', this.motor.getAllOccupations);
        this.router.get('/motor-ux-api/motor/occupation/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/page/:page', this.motor.updatePage);
        this.router.post('/motor-ux-api/motor/update', this.motor.updateQuote);
        this.router.get('/motor-ux-api/motor/quote', this.quote.sendQuote);
        this.router.get('/motor-ux-api/myaa/email/:email', this.motor.checkMyAAEmail);
        this.router.post('/motor-ux-api/myaa/login', this.motor.loginToMyAA);
        this.router.get('/motor-ux-api/motor/section/:section', this.motor.getSection);
        this.router.post('/motor-ux-api/motor/section/:section', this.motor.updateSection);
        this.router.get('/motor-ux-api/motor/section/:section/questions', this.motor.getSectionQuestions);
        this.router.get('/motor-ux-api/motor/reference/town/:town', this.motor.getTown);
        this.router.get('/motor-ux-api/motor/reference/county/:county', this.motor.getCounty);
        this.router.put('/motor-ux-api/motor/reference/address', this.motor.putAddress);
        this.router.post('/motor-ux-api/motor/reference/address/selected', this.motor.selectAddress);
        this.router.get('/motor-ux-api/motor/reference/getVehicleRegistration/:registration', this.motor.getVehicleRegistration);
        this.router.get('/motor-ux-api/motor/reference/car/make/search', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/make/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/model/search', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/model/linked', this.motor.getCarMake);
        this.router.get('/motor-ux-api/motor/reference/car/exactModel/search', this.motor.getOccupation);
        this.router.post('/motor-ux-api/motor/reference/manualCarDetails', this.motor.setCarDetails);
        this.router.post('/motor-ux-api/motor/reference/manualCarTag', this.motor.setCarTag);
        this.router.post('/motor-ux-api/motor/reference/bankVerification', this.motor.checkBankVerification);
        this.router.get('/motor-ux-api/motor/retrieveQuote', this.motor.retrieveQuote);
    }
}
exports.MotorRoutes = MotorRoutes;

//# sourceMappingURL=data:application/json;base64,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Z0RBQWdELEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLHFEQUFxRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0RBQWdELEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUM1RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdEQUFnRCxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUVyRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBS2hGLENBQUM7QUFFRixDQUFDO0FBL0NZLG1CQUFXLGNBK0N2QixDQUFBIiwiZmlsZSI6ImFwaS9tb3Rvci9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbbnVsbF0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
