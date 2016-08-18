import {World} from '../World/World';

export class Hello {
	public text: string;
	constructor(){
		let world = new World();
		this.text = 'Hello' + world.text +  Math.random();
	}
	saySomething()
	{
		alert(1);
	}
}
