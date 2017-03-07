fn main() {
    let mut sum = 0;
    for number in 0..1000 {
        if number % 3 == 0 {
            sum = sum + number;
            println!("we got {}, and sum is {}", number, sum);
        } else if number % 5 == 0 {
            sum = sum + number;
            println!("we got {}, and sum is {}", number, sum);
        }
    }
}
