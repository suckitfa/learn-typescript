interface IRadio {
    switchRadio:(triggerL:boolean)=>void;
}
interface IBattery {
    checkBatteryStatus();
}
interface RadioWithBattery extends IRadio,IBattery {

}
class Car implements IRadio {
    switchRadio() {

    }
}

class CellPhone implements RadioWithBattery {
    checkBatteryStatus() {
        throw new Error("Method not implemented.");
    }
    switchRadio() {
    }
}