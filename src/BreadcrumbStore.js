import EventEmmiter from 'events';

import MyDispatcher from './MyDispatcher';


class BreadcrumbStore extends EventEmmiter {
    constructor() {
        super();
        this.logging = this.logging.bind(this);
    }

    logging() {
        console.log('bbbbb');
        this.emit('blabla');



    }
}
let bs = new BreadcrumbStore();
// console.log(bs);

MyDispatcher.register(bs.logging.bind(bs));
// dfdfcvdsdf s dfas  dfsdfadf
export default bs;