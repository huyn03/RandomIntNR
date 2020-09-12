function RandomIntNR(){

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	let Ints = [];
    
    let rInts = [];

    let isRunning = false;

	this.events = {
    	onValue:()=>{},  
    	onTick:()=>{},  	
        onPause:()=>{},
    	onResume:()=>{},
    	onFinish:()=>{},

    }
	
	this.init = function(params = {}){
		Ints = [];
		
		let intX = typeof params.x === 'number'? params.x: 0;
		let intY = typeof params.y === 'number'? params.y: 0;
		this.events = {...this.events, ...params.events};

		for(; intX <= intY; intX++)
			Ints.push(intX);
	};

	this.run = async function(tick = 10){	
		
		let len = Ints.length - 1;
		rInts = [];
		isRunning = true;
		
		for(len; len >= 0; len--){

        	if(!isRunning)
            {
            	await sleep(400);
                len++;
                continue;
            }

			let r = Math.round(Math.random()* len);
			let tmp = Ints[r];
			rInts.push(tmp);
			Ints[r] = Ints[len];
			Ints[len] = tmp;

			this.events.onTick(tmp);
            this.events.onValue(rInts);
            await sleep(tick);
		}

		this.events.onFinish(rInts);
		return rInts;
	}
    
    this.pause = function(){
    	isRunning = false;
        this.events.onPause(rInts);
    }
    
    this.resume = function(){
    	isRunning = true;
        this.events.onResume(rInts);
    }

    this.getStatus = function(){
    	return isRunning;
    }

}

module.exports = RandomIntNR;