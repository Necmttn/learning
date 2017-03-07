extern crate rand;

use std::io;
use std::cmp::Ordering;
use rand::Rng;

fn main() {
	println!("Guess the number");

	let secret_number = rand::thread_rng().gen_range(1, 101);

	println!("The secret number is  {}", secret_number);


	loop {
		println!("Please input your guess");

		let mut guess = String::new();

		io::stdin().read_line(&mut guess)
				.expect("Failed to read line");

		let guess: u32 = match guess.trim().parse() {
			Ok(num) => num,
			Err(_) => {
				println!("Please input Number!");
				continue
			},
		};

		println!("You guessed: {}", guess);
		
		match guess.cmp(&secret_number) {
				Ordering::Greater => println!("You guessed bigger"),
				Ordering::Less => println!("You guessed smaller"),
				Ordering::Equal => {
					println!("You guessed well");
					break;
				}
		}
	}

}
