export interface eachPrice {
    planName: string;
    amt: number;
    details: string[];
    duration?: string;
    expireIn?: number;
  }
  // this is the current plans for the patient
  // for monthly plans
  export const patientMonthlyPlan: eachPrice[] = [
    {
      planName: "BASIC",
      amt: 2.5,
      details: [
        "1 appointments monthly",
        "1 counselling monthly",
      ],
      duration: "Monthly",
      expireIn: 1,
    },
    {
      planName: "PRO",
      amt: 7,
      details: [
        "Unlimited appointments",
        "Unlimited counselling",
        "Lens prescription",
      ],
      duration: "Monthly",
      expireIn: 1,
    },
  ];
  export const patientSemiAnnualPlan: eachPrice[] = [
    {
      planName: "BASIC",
      amt: 15,
      details: [
        "1 appointments monthly",
        "1 counselling monthly",
        
      ],
      duration: "Semi-Annual",
      expireIn: 6,
    },
    {
      planName: "PRO",
      amt: 40,
      details: [
       "Unlimited appointments",
        "Unlimited counselling",
        "Lens prescription",
      ],
      duration: "Semi-Annual",
      expireIn: 6,
    },
  ];
  export const patientYearlyPlan: eachPrice[] = [
    {
      planName: "Basic",
      amt: 25,
      details: [
        "1 appointments monthly",
        "1 counselling monthly",
        
      ],
      duration: "Yearly",
      expireIn: 12,
    },
    {
      planName: "PRO",
      amt: 80,
      details: [
        "Unlimited appointments",
        "Unlimited counselling",
        "Lens prescription",
      ],
      duration: "Yearly",
      expireIn: 12,
    },
  ];
  // the plan below was used before,
  // and it may be removed later
  export const monthlyPlans: eachPrice[] = [
    {
      planName: "Basic Bundle",
      amt: 0,
      details: [
        "1 Specialist (exclusive owner)",
        "1 appointment",
        "15 counselling session",
        "Email support",
      ],
    },
    {
      planName: "Bronze Bundle",
      amt: 10,
      details: ["2-5 appointments yearly", "5 counselling sessions", "Email support"],
    },
    {
      planName: "Silver Bundle",
      amt: 15,
      details: ["6-10 appointments yearly", "20 counselling sessions", "lens prescription", "Email support"],
    },
    {
      planName: "Gold Bundle",
      amt: 25,
      details: ["11-20 appointments yearly", "3 family members", "50 counselling sessions", "lens prescription", "Email support"],
    },
    {
      planName: "Diamond Bundle",
      amt: 35,
      details: [
        "21-100 appointments yearly",
        "unlimited counselling sessions",
        "unlimited family members",
        "Email support",
      ],
    },
  ];
  