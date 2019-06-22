import Product from '../Product';
import Employee from '../Employee';

export default class CustomerDetails {
    private _customerId: number;
    private _name: string;
    private _companyEmail: string;
    private _address: string;
    private _phone: string;
    private _password: string;
    private _listProducts: Array<Product>;
    private _listEmployees: Array<Employee>;

    /**
     * Getter customerId
     * @return {number}
     */
    public get customerId(): number {
        return this._customerId;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter companyEmail
     * @return {string}
     */
    public get companyEmail(): string {
        return this._companyEmail;
    }

    /**
     * Getter address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Getter phone
     * @return {string}
     */
    public get phone(): string {
        return this._phone;
    }

    /**
     * Getter password
     * @return {string}
     */
    public get password(): string {
        return this._password;
    }

    /**
     * Getter listProducts
     * @return {Array<Product>}
     */
    public get listProducts(): Array<Product> {
        return this._listProducts;
    }

    /**
     * Setter customerId
     * @param {number} value
     */
    public set customerId(value: number) {
        this._customerId = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter companyEmail
     * @param {string} value
     */
    public set companyEmail(value: string) {
        this._companyEmail = value;
    }

    /**
     * Setter address
     * @param {string} value
     */
    public set address(value: string) {
        this._address = value;
    }

    /**
     * Setter phone
     * @param {string} value
     */
    public set phone(value: string) {
        this._phone = value;
    }

    /**
     * Setter password
     * @param {string} value
     */
    public set password(value: string) {
        this._password = value;
    }

    /**
     * Setter listProducts
     * @param {Array<Product>} value
     */
    public set listProducts(value: Array<Product>) {
        this._listProducts = value;
    }

    /**
     * Getter listEmployees
     * @return {Array<Employee>}
     */
    public get listEmployees(): Array<Employee> {
        return this._listEmployees;
    }

    /**
     * Setter listEmployees
     * @param {Array<Employee>} value
     */
    public set listEmployees(value: Array<Employee>) {
        this._listEmployees = value;
    }

}