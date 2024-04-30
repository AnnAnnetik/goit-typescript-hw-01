// src/main.ts

function add(num1: number, num2: number) {
    return num1 + num2;
  }
  
  console.log(add(1, 2));
  enum Role {
    ADMIN,
    USER,
   }
   
   console.log(Role.ADMIN); // 0
   console.log(Role[Role.ADMIN]); // "ADMIN"  