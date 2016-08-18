import {Space} from '../Space/Space';

export class World {
	public text: string;
	constructor(){
		let space = new Space();
		this.text = space.text + 'World!';
	}
}