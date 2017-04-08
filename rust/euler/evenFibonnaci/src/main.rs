fn main() {
    let mut a :i32 = 1;
    let mut b :i32 = 1;
    let mut sum :i32 = 0;

    while a < 4000000 {
        if a % 2 == 0 {
            sum = sum + a 
        }
        let c = a + b;
        a = b;
        b = c;
    }
    println!("Sum: {}", sum)
}


