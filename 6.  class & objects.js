/**
 * 
 * Object vs Data Containers/ data structures
 * => Objects:
 * Private internals/ properties, public API(methods)
 * contains your business logic(in oop)
 * abstractions over concretions
 * 
 * => Data Containers/ data structures
 * Public internals/ properties,almost no API(methods)
 * store and transport data
 * concretions only
 * 
 * 
 * Object banavi ne call karaase methods:
 * class Database {
        private uri: string;
        private provider: any;
        private connection: any;

        constructor(uri: string, provider: any) {
        this.uri = uri;
        this.provider = provider;

        connect () {
        try {
        this. connection = this. provider.establishConnection(this.uri);
        } catch (error) {
        throw new Error('Could not connect!');

        }

        disconnect() {
        this. connection.close();

    }

    Class is acting as data containers:
    class UserCredentials {
        public email: string;
        public password: string;
    }
 * 
 * 
 * Polymorphism: The ability of an object to take on many forms.
 * 
 *  https://github.com/academind/clean-code-course-code/blob/obj-02-classes-polymorphism/polymorphism-start.ts
 *  use multi class destructure entity make their classes
 * make interface, inherit classes 
 * https://github.com/academind/clean-code-course-code/blob/obj-02-classes-polymorphism/polymorphism.ts
 * 
 * 
 * * Classes should be Small
 *  prefer many small classes over a few large classes
 *  classes should have a single responsibility 
 * Single-Responsibility Principle(SRP) 
 * ex. A product class is responsible for product "issues" (eg. manage the product (CRUD of products only))
 *    
 * Cohesion(achive high cohesion) :
 * 
 * Maximum cohesion: all methods each use all properties , a highly cohesive object
 * no cohesion : all methods don't use any class properties , data strucures / containers with utility methods
 * 
 * properties: product, customer, order
 * add products(product)
 * add orders(customers, product , order)
 * edit customer(customers)
 * 
 * 
 * 
 * *Law of Demeter:
 * 
 *  this.customer.lastPurchase.date;
 * ahiya  lastPurchase aapde nai odakhta to eni underr su hoi te khber jj nai pdee
 * Principle of Least Knowledge: Don't depend on the internals of "strangers"
(other objects which you don't directly know)
 * 
 * Code in a method may only access direct internals (properties and methods) of:
· the object it belongs to
· objects that are stored in properties of that object
· objects which are received as method parameters
. objects which are created in the method
 * 
 * 
 * * tell Don't ask
 *  koi b call pr puchvaa nu nai k aa data che but tell k aa data che ena prr aap
 * 
 * https://github.com/academind/clean-code-course-code/blob/obj-05-law-of-demeter/law-of-demeter.ts
 * 
 * 
 * *SOLID Pinciples
 * (all codes)
 * https://github.com/academind/clean-code-course-code/tree/obj-06-solid
 * 
 * *1. Single Responsibility Principle 
 *      classes  should have a single responsibility - a class should't change for more than one reason 
 *
 * *2. Open-Closed Principle
 *       A class should be open for extension but closed for modification
 *          (class ni under kai modifify nai thavu joie but extend thavu joie(inheritance , interface))
 * 
 * *3. Liskov Substitution Principle
 *      Objects should be replaceable with instances of their subclasses without altering the behavior.
 * 
 * *4. Interface Segregation Principle
 *      many client-specific interfaces are better than one general purpose interface
 * 
 * 
 * *5. Dependency Inversion Principle
 *      you should depend upon abstractions, not concretions.
 * 
 * 
 */