# Random Number No Replace

random list integer without replace

## Getting Started

this is mini script random for game.

### Installing

RandomIntNR = require('RandomIntNR.js')

## Usage

```
let r = new RandomIntNR();

r.init({
    x:1,
    y: 10,
    events: {
        onValue: e=> { console.log(e) },
        onTick: e=> { console.log(e) }
    }
});

r.events.onPause = function(e){ console.log(e) };

r.run()
r.pause();
r.resume();
```

## Built With

javascript - typescript

## Authors

**Đinh Thanh Huy** [DrHuy](https://github.com/huyn03)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks for used
* It help for you: donate me $1: https://paypal.me/huy03