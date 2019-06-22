export default class Employee {
    private _employeeId: number;
    private _name: string;
    private _surname: string;
    private _dni: string;
    private _numberAccount: number;
    private _amount: number;
    private _email: string;
    private _customerId: number;

    /**
     * Getter employeeId
     * @return {number}
     */
	public get employeeId(): number {
		return this._employeeId;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter surname
     * @return {string}
     */
	public get surname(): string {
		return this._surname;
	}

    /**
     * Getter dni
     * @return {string}
     */
	public get dni(): string {
		return this._dni;
	}

    /**
     * Getter numberAccount
     * @return {number}
     */
	public get numberAccount(): number {
		return this._numberAccount;
	}

    /**
     * Getter amount
     * @return {number}
     */
	public get amount(): number {
		return this._amount;
	}

    /**
     * Getter email
     * @return {string}
     */
	public get email(): string {
		return this._email;
	}

    /**
     * Getter customerId
     * @return {number}
     */
	public get customerId(): number {
		return this._customerId;
	}

    /**
     * Setter employeeId
     * @param {number} value
     */
	public set employeeId(value: number) {
		this._employeeId = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter surname
     * @param {string} value
     */
	public set surname(value: string) {
		this._surname = value;
	}

    /**
     * Setter dni
     * @param {string} value
     */
	public set dni(value: string) {
		this._dni = value;
	}

    /**
     * Setter numberAccount
     * @param {number} value
     */
	public set numberAccount(value: number) {
		this._numberAccount = value;
	}

    /**
     * Setter amount
     * @param {number} value
     */
	public set amount(value: number) {
		this._amount = value;
	}

    /**
     * Setter email
     * @param {string} value
     */
	public set email(value: string) {
		this._email = value;
	}

    /**
     * Setter customerId
     * @param {number} value
     */
	public set customerId(value: number) {
		this._customerId = value;
	}

}