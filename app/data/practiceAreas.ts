export type PracticeArea = {
  slug: string;
  title: string;
  h1: string;
  tagline: string;
  metaDescription: string;
  heroDescription: string;
  caseTypes: {
    title: string;
    description: string;
  }[];
  signs: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedAreas: string[]; // slugs of related practice areas
};

export const practiceAreas: Record<string, PracticeArea> = {
  "civil-rights-violations": {
    slug: "civil-rights-violations",
    title: "Civil Rights Violations",
    h1: "New York Civil Rights Lawyer",
    tagline: "Defending Your Constitutional Rights in New York",
    metaDescription:
      "Experienced New York civil rights attorney fighting against government abuse and constitutional violations. Free consultation. No fee unless we win.",
    heroDescription:
      "When government officials, police officers, or public institutions violate your constitutional rights, you deserve justice. Jessica has spent her career litigating cases on behalf of individuals harmed by police misconduct. Holding authorities accountable and securing compensation for victims of civil rights abuses across Manhattan, Brooklyn, Queens, and throughout New York State.",
    caseTypes: [
      {
        title: "First Amendment Violations",
        description:
          "Protection of free speech, religious freedom, and the right to peaceful assembly against government interference and retaliation.",
      },
      {
        title: "Fourth Amendment Violations",
        description:
          "Unlawful searches, seizures, and arrests conducted without proper warrants or probable cause by law enforcement.",
      },
      {
        title: "Due Process Violations",
        description:
          "Government actions that deprive individuals of life, liberty, or property without proper legal procedures and safeguards.",
      },
      {
        title: "Equal Protection Claims",
        description:
          "Discriminatory treatment by government entities based on race, gender, religion, or other protected characteristics.",
      },
      {
        title: "Prisoner Rights",
        description:
          "Inhumane conditions, excessive force, and denial of medical care in jails, prisons, and detention facilities.",
      },
      {
        title: "Voting Rights",
        description:
          "Interference with the right to vote, voter suppression, and discriminatory election practices.",
      },
    ],
    signs: [
      "You were arrested or detained without probable cause or a valid warrant",
      "Police conducted a search of your person, home, or vehicle without consent or a warrant",
      "Government officials retaliated against you for exercising free speech or filing complaints",
      "You were denied services or treated differently by a government agency based on your race, religion, or other protected status",
      "You experienced excessive force or abuse while in police custody or detention",
      "Your due process rights were violated in a government proceeding",
      "You were prevented from peacefully protesting or assembling",
      "A government employer retaliated against you for whistleblowing",
    ],
    faqs: [
      {
        question: "What qualifies as a civil rights violation in New York?",
        answer:
          "A civil rights violation occurs when a government official, agency, or entity acting under color of law deprives you of rights guaranteed by the U.S. Constitution or federal law. This includes unlawful arrests, excessive force, discrimination by government entities, First Amendment retaliation, and due process violations.",
      },
      {
        question: "How long do I have to file a civil rights lawsuit in New York?",
        answer:
          "In New York, Section 1983 civil rights claims generally have a 3-year statute of limitations from the date of the violation. However, certain claims may have shorter deadlines, and factors like continuing violations can affect timing. Consult an attorney promptly to preserve your rights.",
      },
      {
        question: "What damages can I recover in a civil rights case?",
        answer:
          "Victims of civil rights violations may recover compensatory damages for physical injury, emotional distress, and economic losses; punitive damages to punish egregious conduct; attorney's fees and costs; and in some cases, injunctive relief to prevent future violations.",
      },
      {
        question: "Can I sue the police for violating my civil rights?",
        answer:
          "Yes. Under 42 U.S.C. § 1983, you can sue police officers and other government officials who violate your constitutional rights while acting under color of law. You may also be able to sue the municipality if the violation resulted from an official policy or custom.",
      },
    ],
    relatedAreas: ["police-brutality", "false-arrest", "excessive-force"],
  },

  "employment-discrimination": {
    slug: "employment-discrimination",
    title: "Employment Discrimination",
    h1: "New York Employment Discrimination Lawyer",
    tagline: "Protecting Workers' Rights Across New York City",
    metaDescription:
      "Experienced New York employment discrimination attorney fighting for workers facing workplace bias. Free consultation. No fee unless we win.",
    heroDescription:
      "If you've experienced discrimination at work based on your race, gender, sexual orientation, pregnancy status, age, disability, or other protected characteristic, you have legal rights. Jessica has recovered millions of dollars for workers throughout New York City and New York State.",
    caseTypes: [
      {
        title: "Race Discrimination",
        description:
          "Federal and New York State laws prohibit employers from making decisions based on race or national origin. We fight for workers facing racial bias in hiring, promotions, pay, and termination.",
      },
      {
        title: "Gender & Sex Discrimination",
        description:
          "From unequal pay to pregnancy discrimination, New York workers are protected against sex-based workplace decisions. Our attorneys hold employers accountable.",
      },
      {
        title: "Age Discrimination",
        description:
          "Workers 40 and older are protected under the ADEA and New York Human Rights Law. We represent employees facing age-based termination and hiring bias.",
      },
      {
        title: "Disability Discrimination",
        description:
          "The ADA and New York law require employers to provide reasonable accommodations. We fight for workers denied accommodations or terminated due to disability.",
      },
      {
        title: "Religious Discrimination",
        description:
          "Employers must reasonably accommodate religious practices. Jessica represents workers facing religious bias and denial of accommodations.",
      },
      {
        title: "Retaliation Claims",
        description:
          "It's illegal for employers to punish workers who report discrimination. We protect whistleblowers and employees who assert their rights.",
      },
    ],
    signs: [
      "You were fired, demoted, or passed over for promotion after disclosing a protected characteristic",
      "You receive lower pay than colleagues doing the same work who are of a different race, gender, or age",
      "Your employer made offensive comments about your race, religion, gender, age, or disability",
      "You were denied a reasonable accommodation for a disability or religious practice",
      "You faced retaliation after complaining about discrimination or harassment",
      "You were treated differently than other employees in similar situations",
      "Job postings or interview questions suggested preference for certain protected groups",
      "You were subjected to a hostile work environment based on a protected characteristic",
    ],
    faqs: [
      {
        question: "How much does a New York employment discrimination lawyer cost?",
        answer:
          "We handle employment discrimination cases on a contingency fee basis, meaning you pay no upfront costs and no attorney fees unless we win your case. Our free initial consultation allows us to evaluate your case at no cost to you.",
      },
      {
        question: "How long do I have to file an employment discrimination claim in New York?",
        answer:
          "In New York, you generally have 3 years to file a discrimination claim under the New York State Human Rights Law, or 300 days to file with the EEOC for federal claims. However, deadlines vary based on your specific situation, so it's critical to consult an attorney promptly.",
      },
      {
        question: "What compensation can I recover in an employment discrimination case?",
        answer:
          "Victims of employment discrimination in New York may recover back pay, front pay, compensatory damages for emotional distress, punitive damages, attorney's fees, and in some cases, reinstatement to your position.",
      },
      {
        question: "What evidence do I need to prove employment discrimination?",
        answer:
          "Useful evidence includes performance reviews, emails or messages showing bias, witness statements, documentation of how similarly-situated employees were treated, and records of complaints you made. Our attorneys can help you identify and preserve critical evidence.",
      },
    ],
    relatedAreas: ["sexual-harassment", "wrongful-termination", "workplace-harassment"],
  },

  "sexual-harassment": {
    slug: "sexual-harassment",
    title: "Sexual Harassment",
    h1: "New York Sexual Harassment Lawyer",
    tagline: "Fighting Workplace Sexual Harassment in New York",
    metaDescription:
      "Experienced New York sexual harassment attorney representing victims of workplace harassment. Confidential consultation. No fee unless we win.",
    heroDescription:
      "No one should endure sexual harassment or retaliation at work. Whether you've faced unlawful termination, unwanted advances, inappropriate comments, or a hostile work environment, Jessica is here to help you fight back and recover the compensation you deserve.",
    caseTypes: [
      {
        title: "Quid Pro Quo Harassment",
        description:
          "When job benefits are conditioned on sexual favors, or when rejection of advances leads to adverse employment actions like termination or demotion.",
      },
      {
        title: "Hostile Work Environment",
        description:
          "Pervasive or severe sexual conduct that creates an intimidating, offensive, or abusive workplace, interfering with your ability to do your job.",
      },
      {
        title: "Unwanted Physical Contact",
        description:
          "Any unwelcome touching, groping, or physical advances in the workplace, regardless of whether the perpetrator is a supervisor, coworker, or client.",
      },
      {
        title: "Verbal & Visual Harassment",
        description:
          "Sexually explicit comments, jokes, emails, images, or gestures that create a hostile or offensive work environment.",
      },
      {
        title: "Supervisor Harassment",
        description:
          "Harassment by managers, supervisors, or executives who abuse their position of power to engage in or enable sexual misconduct.",
      },
      {
        title: "Retaliation for Reporting",
        description:
          "Adverse actions taken against employees who report sexual harassment or participate in harassment investigations.",
      },
    ],
    signs: [
      "A supervisor or coworker has made unwanted sexual advances or requests for sexual favors",
      "You've received sexually explicit messages, emails, or images at work",
      "Someone at work has made inappropriate comments about your body or appearance",
      "You've been touched inappropriately or without consent in the workplace",
      "Job benefits were offered in exchange for sexual favors, or you were punished for refusing",
      "You reported harassment and faced retaliation, demotion, or termination",
      "Sexually offensive jokes, comments, or materials are common in your workplace",
      "You feel unsafe or uncomfortable at work due to sexual conduct",
    ],
    faqs: [
      {
        question: "What qualifies as sexual harassment under New York law?",
        answer:
          "Under New York law, sexual harassment includes any unwelcome sexual conduct that affects your employment or creates a hostile work environment. This can include physical contact, verbal comments, visual displays, or requests for sexual favors. New York has some of the strongest protections in the nation.",
      },
      {
        question: "Can I sue for sexual harassment if I didn't report it to HR?",
        answer:
          "Yes. While reporting to HR can strengthen your case, it is not always required to file a lawsuit. Many victims have valid reasons for not reporting internally, including fear of retaliation or distrust of the process. An attorney can evaluate your specific situation.",
      },
      {
        question: "What if the harasser is not my direct supervisor?",
        answer:
          "Employers can be held liable for harassment by coworkers, clients, or vendors if they knew or should have known about the harassment and failed to take prompt corrective action. New York law provides broad protections regardless of the harasser's role.",
      },
      {
        question: "How long do I have to file a sexual harassment claim in New York?",
        answer:
          "Under the New York State Human Rights Law, you generally have 3 years to file a sexual harassment claim. For federal claims under Title VII, you must file with the EEOC within 300 days. Contact an attorney promptly to preserve your rights.",
      },
    ],
    relatedAreas: ["employment-discrimination", "workplace-harassment", "wrongful-termination"],
  },

  "pregnancy-discrimination": {
    slug: "pregnancy-discrimination",
    title: "Pregnancy Discrimination",
    h1: "New York Pregnancy Discrimination Lawyer",
    tagline: "Protecting Pregnant Workers' Rights in New York",
    metaDescription:
      "Experienced New York pregnancy discrimination attorney fighting for pregnant workers and new mothers. Free consultation. No fee unless we win.",
    heroDescription:
      "Pregnancy should be a time of joy, not workplace stress. If you've been fired, demoted, or denied accommodations because of pregnancy, childbirth, or a related medical condition, Jessica will fight to protect your rights and your family's future.",
    caseTypes: [
      {
        title: "Termination During Pregnancy",
        description:
          "Being fired, laid off, or forced out because you are pregnant or planning to become pregnant violates federal and New York law.",
      },
      {
        title: "Denial of Accommodations",
        description:
          "Employers must provide reasonable accommodations for pregnancy-related conditions, such as modified duties, extra breaks, or schedule adjustments.",
      },
      {
        title: "Failure to Hire",
        description:
          "Refusing to hire a qualified candidate because she is pregnant or may become pregnant is illegal discrimination.",
      },
      {
        title: "Demotion or Reduced Hours",
        description:
          "Reducing a pregnant employee's responsibilities, pay, or hours based on assumptions about her abilities or commitment.",
      },
      {
        title: "Harassment Based on Pregnancy",
        description:
          "Offensive comments, jokes, or hostile treatment related to pregnancy, childbirth, or breastfeeding that creates a hostile work environment.",
      },
      {
        title: "Retaliation for Taking Leave",
        description:
          "Punishing employees for taking maternity leave or requesting pregnancy-related accommodations.",
      },
    ],
    signs: [
      "You were fired or laid off shortly after announcing your pregnancy",
      "Your employer refused to provide accommodations for pregnancy-related medical needs",
      "You were passed over for a promotion or raise after becoming pregnant",
      "Coworkers or supervisors made offensive comments about your pregnancy",
      "You were pressured to take leave earlier than medically necessary",
      "Your job duties or schedule were changed without your consent after announcing pregnancy",
      "You were treated differently than non-pregnant employees with similar limitations",
      "You faced negative consequences for taking maternity leave or pumping breast milk",
    ],
    faqs: [
      {
        question: "What laws protect pregnant workers in New York?",
        answer:
          "Pregnant workers in New York are protected by the federal Pregnancy Discrimination Act, the New York State Human Rights Law, and the New York City Human Rights Law. These laws prohibit discrimination and require employers to provide reasonable accommodations for pregnancy-related conditions.",
      },
      {
        question: "Can my employer fire me for being pregnant?",
        answer:
          "No. It is illegal for employers to fire, demote, or take any adverse action against you because of pregnancy, childbirth, or related medical conditions. If you were terminated shortly after announcing your pregnancy, you may have a discrimination claim.",
      },
      {
        question: "What accommodations must my employer provide during pregnancy?",
        answer:
          "Employers must provide reasonable accommodations such as more frequent breaks, modified work schedules, temporary transfer to less strenuous duties, time off for prenatal appointments, and a private space for pumping breast milk.",
      },
      {
        question: "How long do I have to file a pregnancy discrimination claim?",
        answer:
          "Under New York State Human Rights Law, you have 3 years to file a pregnancy discrimination claim. Federal claims under the Pregnancy Discrimination Act must be filed with the EEOC within 300 days of the discriminatory act.",
      },
    ],
    relatedAreas: ["employment-discrimination", "wrongful-termination", "fmla-violations"],
  },

  "wrongful-termination": {
    slug: "wrongful-termination",
    title: "Wrongful Termination",
    h1: "New York Wrongful Termination Lawyer",
    tagline: "Fighting Illegal Firings Across New York",
    metaDescription:
      "Experienced New York wrongful termination attorney helping workers who were illegally fired. Free consultation. No fee unless we win.",
    heroDescription:
      "Being fired is devastating—especially when it's illegal. If you were terminated for discriminatory reasons, for whistleblowing, or in violation of your employment contract, Jessica will fight to hold your employer accountable and recover the compensation you deserve.",
    caseTypes: [
      {
        title: "Discriminatory Termination",
        description:
          "Firing based on race, gender, age, disability, religion, pregnancy, or other protected characteristics violates federal and New York law.",
      },
      {
        title: "Retaliation Termination",
        description:
          "Being fired for reporting discrimination, harassment, safety violations, or other illegal conduct is unlawful retaliation.",
      },
      {
        title: "Whistleblower Termination",
        description:
          "Employees who report fraud, safety violations, or other illegal activities are protected from termination under whistleblower laws.",
      },
      {
        title: "Contract Violations",
        description:
          "Termination that breaches an employment contract, collective bargaining agreement, or implied promises made by the employer.",
      },
      {
        title: "FMLA Retaliation",
        description:
          "Firing an employee for taking or requesting protected family or medical leave under FMLA or New York Paid Family Leave.",
      },
      {
        title: "Public Policy Violations",
        description:
          "Termination for refusing to engage in illegal activity, exercising legal rights, or performing civic duties like jury service.",
      },
    ],
    signs: [
      "You were fired shortly after reporting discrimination, harassment, or illegal conduct",
      "Your termination came soon after announcing a pregnancy, disability, or need for medical leave",
      "You were replaced by someone significantly younger or of a different protected class",
      "The stated reason for your firing doesn't match your performance record",
      "Other employees engaged in similar conduct but weren't terminated",
      "You were fired after refusing to participate in illegal activities",
      "Your employer violated the terms of your employment contract",
      "You were terminated shortly after filing a workers' compensation claim",
    ],
    faqs: [
      {
        question: "What makes a termination 'wrongful' in New York?",
        answer:
          "While New York is an at-will employment state, termination is wrongful if it's based on discrimination, retaliation for protected activity, breach of contract, or violation of public policy. If your firing was motivated by an illegal reason, you may have a claim.",
      },
      {
        question: "Can I sue for wrongful termination in an at-will state?",
        answer:
          "Yes. Although New York is an at-will state, there are many exceptions. Employers cannot fire you for discriminatory reasons, in retaliation for protected activity, in violation of a contract, or for reasons that violate public policy.",
      },
      {
        question: "What damages can I recover in a wrongful termination case?",
        answer:
          "You may recover back pay (wages lost since termination), front pay (future lost wages), compensatory damages for emotional distress, punitive damages in egregious cases, attorney's fees, and potentially reinstatement to your position.",
      },
      {
        question: "How long do I have to file a wrongful termination claim in New York?",
        answer:
          "Deadlines vary depending on the basis of your claim. Discrimination claims under NY Human Rights Law have a 3-year deadline. Contract claims may have a 6-year deadline. Some federal claims require filing with agencies within 180-300 days. Consult an attorney promptly.",
      },
    ],
    relatedAreas: ["employment-discrimination", "sexual-harassment", "fmla-violations"],
  },

  "racial-discrimination": {
    slug: "racial-discrimination",
    title: "Racial Discrimination",
    h1: "New York Racial Discrimination Lawyer",
    tagline: "Fighting Workplace Racism in New York",
    metaDescription:
      "Experienced New York racial discrimination attorney representing workers facing race-based workplace discrimination. Free consultation. No fee unless we win.",
    heroDescription:
      "Racial discrimination in the workplace is illegal and unacceptable. If you've experienced bias, harassment, or unfair treatment because of your race, color, or national origin, Jessica will fight for justice and hold your employer accountable.",
    caseTypes: [
      {
        title: "Hiring Discrimination",
        description:
          "Refusing to hire qualified candidates based on race, color, ethnicity, or national origin, including biased interview practices.",
      },
      {
        title: "Promotion & Pay Discrimination",
        description:
          "Denying promotions, raises, or equal pay to employees based on race rather than qualifications and performance.",
      },
      {
        title: "Racial Harassment",
        description:
          "Slurs, offensive jokes, racist imagery, or other conduct creating a hostile work environment based on race.",
      },
      {
        title: "Disparate Treatment",
        description:
          "Applying different standards, rules, or discipline to employees of different races in similar situations.",
      },
      {
        title: "Termination Based on Race",
        description:
          "Firing, laying off, or constructively discharging employees because of their race or ethnicity.",
      },
      {
        title: "Retaliation for Complaints",
        description:
          "Punishing employees who report racial discrimination or participate in discrimination investigations.",
      },
    ],
    signs: [
      "You've heard racial slurs, jokes, or offensive comments in your workplace",
      "You were passed over for promotion in favor of less qualified employees of a different race",
      "You receive lower pay than colleagues of different races doing the same work",
      "You've been disciplined more harshly than employees of other races for similar conduct",
      "Your workplace displays racist imagery or tolerates racist behavior",
      "You were denied opportunities given to employees of other races",
      "You faced retaliation after complaining about racial discrimination",
      "Your employer makes assumptions about your abilities based on your race",
    ],
    faqs: [
      {
        question: "What is racial discrimination in employment?",
        answer:
          "Racial discrimination occurs when an employer treats an employee or job applicant unfavorably because of their race, color, ethnicity, or national origin. This includes hiring, firing, pay, promotions, job assignments, training, and any other term or condition of employment.",
      },
      {
        question: "What laws prohibit racial discrimination in New York?",
        answer:
          "Racial discrimination is prohibited by Title VII of the Civil Rights Act (federal), the New York State Human Rights Law, and the New York City Human Rights Law. These laws provide strong protections and remedies for victims of race-based workplace discrimination.",
      },
      {
        question: "Can I sue for a racially hostile work environment?",
        answer:
          "Yes. If racial harassment is severe or pervasive enough to create a hostile or abusive work environment, you may have a legal claim against your employer. This includes racial slurs, jokes, imagery, or other offensive conduct based on race.",
      },
      {
        question: "What compensation can I recover for racial discrimination?",
        answer:
          "Victims of racial discrimination may recover back pay, front pay, compensatory damages for emotional distress, punitive damages, attorney's fees, and costs. In some cases, reinstatement or promotion may also be available.",
      },
    ],
    relatedAreas: ["employment-discrimination", "workplace-harassment", "wrongful-termination"],
  },

  "workplace-harassment": {
    slug: "workplace-harassment",
    title: "Workplace Harassment",
    h1: "New York Workplace Harassment Lawyer",
    tagline: "Ending Hostile Work Environments in New York",
    metaDescription:
      "Experienced New York workplace harassment attorney fighting hostile work environments and employee abuse. Free consultation. No fee unless we win.",
    heroDescription:
      "Everyone deserves a workplace free from harassment and hostility. If you're facing persistent bullying, intimidation, or abuse based on a protected characteristic, Jessica will help you fight back and hold your employer accountable.",
    caseTypes: [
      {
        title: "Hostile Work Environment",
        description:
          "Pervasive harassment based on race, gender, religion, or other protected traits that creates an intimidating or abusive workplace.",
      },
      {
        title: "Bullying & Intimidation",
        description:
          "Targeted mistreatment, threats, or aggressive behavior directed at employees based on protected characteristics.",
      },
      {
        title: "Verbal Abuse",
        description:
          "Slurs, insults, offensive jokes, or demeaning comments related to an employee's protected status.",
      },
      {
        title: "Physical Harassment",
        description:
          "Unwanted physical contact, threats of violence, or intimidating physical behavior in the workplace.",
      },
      {
        title: "Online & Digital Harassment",
        description:
          "Harassment through email, messaging apps, social media, or other digital platforms related to work.",
      },
      {
        title: "Retaliation for Reporting",
        description:
          "Adverse actions against employees who report harassment or participate in workplace investigations.",
      },
    ],
    signs: [
      "You regularly experience offensive comments, jokes, or slurs at work",
      "A coworker or supervisor repeatedly targets you with hostile or demeaning behavior",
      "You've received threatening messages or communications from colleagues",
      "Your employer ignores or dismisses your complaints about harassment",
      "The harassment is based on your race, gender, religion, age, disability, or other protected trait",
      "You dread going to work because of the hostile environment",
      "You've faced retaliation for reporting harassment",
      "The harassment has affected your mental health, performance, or career",
    ],
    faqs: [
      {
        question: "What qualifies as workplace harassment under New York law?",
        answer:
          "Under New York law, workplace harassment is unwelcome conduct based on a protected characteristic (race, gender, religion, etc.) that is severe or pervasive enough to create a hostile work environment. New York has broader protections than federal law.",
      },
      {
        question: "Is my employer liable for harassment by coworkers?",
        answer:
          "Yes. Employers can be held liable for harassment by coworkers if they knew or should have known about the harassment and failed to take prompt corrective action. Employers are also liable for harassment by supervisors.",
      },
      {
        question: "Do I need to report harassment to HR before suing?",
        answer:
          "While reporting to HR can strengthen your case and may be required by company policy, it is not always a legal prerequisite to filing a lawsuit. Many harassment victims have valid reasons for not reporting internally.",
      },
      {
        question: "What can I recover in a workplace harassment lawsuit?",
        answer:
          "You may recover compensatory damages for emotional distress and economic losses, punitive damages, back pay if you lost wages, attorney's fees and costs, and potentially injunctive relief requiring the employer to change its practices.",
      },
    ],
    relatedAreas: ["sexual-harassment", "racial-discrimination", "employment-discrimination"],
  },

  "paid-family-leave-violations": {
    slug: "paid-family-leave-violations",
    title: "Paid Family Leave Violations",
    h1: "New York Paid Family Leave Lawyer",
    tagline: "Protecting Your Right to Family Leave in New York",
    metaDescription:
      "Experienced New York Paid Family Leave attorney helping workers denied leave or facing retaliation. Free consultation. No fee unless we win.",
    heroDescription:
      "New York's Paid Family Leave law gives workers the right to take time off to bond with a new child, or care for a sick family member. If your employer denied your leave or retaliated against you for taking it, our lawyers will fight for your rights.",
    caseTypes: [
      {
        title: "Denial of Leave",
        description:
          "Employers who wrongfully deny eligible employees' requests for Paid Family Leave violate New York law.",
      },
      {
        title: "Retaliation for Taking Leave",
        description:
          "Firing, demoting, or punishing employees for requesting or taking Paid Family Leave is illegal retaliation.",
      },
      {
        title: "Failure to Restore Position",
        description:
          "Employers must return employees to their same or comparable position after Paid Family Leave ends.",
      },
      {
        title: "Interference with Leave Rights",
        description:
          "Discouraging employees from taking leave, providing false information, or creating obstacles to leave requests.",
      },
      {
        title: "Benefits Violations",
        description:
          "Failing to maintain health insurance or other benefits during Paid Family Leave as required by law.",
      },
      {
        title: "Misclassification to Avoid Leave",
        description:
          "Misclassifying employees as independent contractors to avoid Paid Family Leave obligations.",
      },
    ],
    signs: [
      "Your employer denied your request for Paid Family Leave without valid justification",
      "You were fired, demoted, or disciplined after requesting or taking family leave",
      "Your employer discouraged you from applying for Paid Family Leave",
      "You weren't restored to your original position or a comparable role after leave",
      "Your health insurance or benefits were terminated during your leave",
      "Your employer gave you incorrect information about your leave rights",
      "You were treated negatively compared to employees who didn't take leave",
      "Your employer pressured you to return from leave early",
    ],
    faqs: [
      {
        question: "Who is eligible for New York Paid Family Leave?",
        answer:
          "Most private employees in New York are eligible for Paid Family Leave after meeting minimum work requirements (26 consecutive weeks for regular employees, or 175 days for part-time workers). Self-employed individuals can opt in to coverage.",
      },
      {
        question: "How much leave can I take under New York PFL?",
        answer:
          "Eligible employees can take up to 12 weeks of Paid Family Leave per year to bond with a new child, care for a family member with a serious health condition, or assist with family needs when a relative is deployed for military service.",
      },
      {
        question: "Can my employer fire me for taking Paid Family Leave?",
        answer:
          "No. It is illegal for employers to retaliate against employees for requesting or taking Paid Family Leave. This includes termination, demotion, reduced hours, or any other adverse employment action.",
      },
      {
        question: "What should I do if my PFL request was denied?",
        answer:
          "If your Paid Family Leave request was denied, you can request a review from your employer's insurance carrier. If the denial is upheld, you may appeal to the Workers' Compensation Board. An attorney can help you navigate this process and pursue legal action if necessary.",
      },
    ],
    relatedAreas: ["fmla-violations", "pregnancy-discrimination", "wrongful-termination"],
  },

  "fmla-violations": {
    slug: "fmla-violations",
    title: "FMLA Violations",
    h1: "New York FMLA Lawyer",
    tagline: "Protecting Your Federal Family & Medical Leave Rights",
    metaDescription:
      "Experienced New York FMLA attorney helping workers denied medical leave or facing retaliation. Free consultation. No fee unless we win.",
    heroDescription:
      "The Family and Medical Leave Act ('FMLA') protects your right to take unpaid leave for serious health conditions or family needs without losing your job. If your employer denied your FMLA leave, retaliated against you, or refused to restore your position, Jessica will fight for your rights.",
    caseTypes: [
      {
        title: "Denial of FMLA Leave",
        description:
          "Employers who wrongfully deny eligible employees' requests for FMLA leave violate federal law and may be liable for damages.",
      },
      {
        title: "FMLA Retaliation",
        description:
          "Firing, demoting, disciplining, or otherwise punishing employees for requesting or taking FMLA leave.",
      },
      {
        title: "Failure to Reinstate",
        description:
          "Employers must restore employees to the same or equivalent position after FMLA leave, with equivalent pay and benefits.",
      },
      {
        title: "Interference with FMLA Rights",
        description:
          "Discouraging leave requests, requiring unnecessary documentation, or otherwise interfering with FMLA rights.",
      },
      {
        title: "Counting FMLA Against Attendance",
        description:
          "Using FMLA-protected absences against employees in attendance policies or performance reviews is illegal.",
      },
      {
        title: "Benefits Violations",
        description:
          "Failing to maintain group health insurance during FMLA leave or denying benefits upon return.",
      },
    ],
    signs: [
      "Your employer denied your FMLA leave request without valid justification",
      "You were fired, demoted, or disciplined after taking or requesting FMLA leave",
      "Your employer discouraged you from taking FMLA leave or made it difficult to apply",
      "You weren't returned to your same or equivalent position after FMLA leave",
      "Your FMLA absences were counted against you in attendance or performance reviews",
      "Your employer failed to maintain your health insurance during leave",
      "You were required to provide excessive documentation or face unreasonable delays",
      "Your employer interfered with your intermittent FMLA leave",
    ],
    faqs: [
      {
        question: "Who is eligible for FMLA leave?",
        answer:
          "To be eligible for FMLA, you must work for a covered employer (50+ employees within 75 miles), have worked for the employer for at least 12 months, and have worked at least 1,250 hours in the 12 months before leave. Eligible employees can take up to 12 weeks of unpaid, job-protected leave.",
      },
      {
        question: "What qualifies as a serious health condition under FMLA?",
        answer:
          "A serious health condition includes illness, injury, impairment, or physical/mental condition involving inpatient care or continuing treatment by a healthcare provider. This includes chronic conditions, pregnancy, and conditions requiring multiple treatments.",
      },
      {
        question: "Can I be fired for taking FMLA leave?",
        answer:
          "No. FMLA prohibits employers from retaliating against employees for taking or requesting protected leave. If you were terminated, demoted, or faced other adverse actions after FMLA leave, you may have a retaliation claim.",
      },
      {
        question: "What damages can I recover for FMLA violations?",
        answer:
          "You may recover lost wages and benefits, compensation for out-of-pocket expenses, liquidated (double) damages for willful violations, attorney's fees and costs, and equitable relief such as reinstatement or promotion.",
      },
    ],
    relatedAreas: ["paid-family-leave-violations", "pregnancy-discrimination", "wrongful-termination"],
  },

  "labor-law-violations": {
    slug: "labor-law-violations",
    title: "Labor Law Violations",
    h1: "New York Labor Law Lawyer",
    tagline: "Protecting Workers from Labor Law Violations",
    metaDescription:
      "Experienced New York labor law attorney fighting for workers' rights against employer violations. Free consultation. No fee unless we win.",
    heroDescription:
      "New York's labor laws provide strong protections for workers. If your employer has violated your rights regarding wages, working conditions, breastfeeding, union activity, or workplace safety, Jessica will fight to hold them accountable and recover what you're owed.",
    caseTypes: [
      {
        title: "Union Rights Violations",
        description:
          "Interference with employees' rights to organize, join unions, or engage in collective bargaining activities.",
      },
      {
        title: "Workplace Safety Violations",
        description:
          "Employers who fail to provide safe working conditions or retaliate against employees who report safety hazards.",
      },
      {
        title: "Retaliation for Protected Activity",
        description:
          "Punishing workers for reporting violations, participating in investigations, or exercising legal rights.",
      },
      {
        title: "Meal & Rest Break Violations",
        description:
          "Denying required meal periods and rest breaks, or requiring work during break times without compensation.",
      },
      {
        title: "Record-Keeping Violations",
        description:
          "Failing to maintain accurate time records, provide required wage notices, or furnish pay stubs.",
      },
      {
        title: "Child Labor Violations",
        description:
          "Employing minors in violation of laws regarding working hours, prohibited occupations, or required permits.",
      },
    ],
    signs: [
      "Your employer interfered with your right to organize or join a union",
      "You faced retaliation for reporting safety violations or workplace hazards",
      "Your employer doesn't provide required meal or rest breaks",
      "You were punished for participating in protected concerted activity",
      "Your employer fails to maintain accurate time and pay records",
      "Unsafe working conditions have caused injuries in your workplace",
      "Your employer retaliates against workers who exercise their legal rights",
      "You've witnessed or experienced violations of minor employment laws",
    ],
    faqs: [
      {
        question: "What are my rights under New York labor law?",
        answer:
          "New York labor law protects your right to minimum wage, overtime pay, meal and rest breaks, safe working conditions, freedom from retaliation, accurate wage statements, and the right to organize and join unions, among other protections.",
      },
      {
        question: "Can I be fired for reporting labor law violations?",
        answer:
          "No. New York law prohibits retaliation against employees who report labor law violations, participate in investigations, or exercise their rights under labor laws. Retaliation can include termination, demotion, reduced hours, or harassment.",
      },
      {
        question: "What should I do if my employer violates labor laws?",
        answer:
          "Document the violations, report them to appropriate agencies (such as the New York Department of Labor or OSHA for safety violations), and consult with an attorney. You may be entitled to compensation and protection from retaliation.",
      },
      {
        question: "How long do I have to file a labor law complaint?",
        answer:
          "Deadlines vary depending on the specific violation. Wage claims typically have a 6-year statute of limitations in New York. Retaliation and other claims may have shorter deadlines. Consult an attorney promptly to preserve your rights.",
      },
    ],
    relatedAreas: ["wage-hour-violations", "wrongful-termination", "workplace-harassment"],
  },

  "wage-hour-violations": {
    slug: "wage-hour-violations",
    title: "Wage & Hour Violations",
    h1: "New York Wage & Hour Lawyer",
    tagline: "Recovering Unpaid Wages for New York Workers",
    metaDescription:
      "Experienced New York wage and hour attorney recovering unpaid wages, overtime, and tips. Free consultation. No fee unless we win.",
    heroDescription:
      "If your employer has failed to pay you minimum wage, overtime, or tips you've earned, you have the right to recover what you're owed—plus penalties.",
    caseTypes: [
      {
        title: "Unpaid Overtime",
        description:
          "Non-exempt employees must receive 1.5 times their regular rate for hours worked over 40 per week. Many employers illegally avoid paying overtime.",
      },
      {
        title: "Minimum Wage Violations",
        description:
          "All workers are entitled to at least minimum wage for every hour worked. New York has higher minimums than federal law.",
      },
      {
        title: "Tip Theft & Violations",
        description:
          "Illegal tip pooling, skimming, or failure to pay proper tipped minimum wage violates New York law.",
      },
      {
        title: "Off-the-Clock Work",
        description:
          "Requiring work before clocking in, after clocking out, or during unpaid breaks is wage theft.",
      },
      {
        title: "Misclassification",
        description:
          "Improperly classifying employees as exempt or as independent contractors to avoid wage and hour obligations.",
      },
      {
        title: "Illegal Deductions",
        description:
          "Unauthorized deductions from wages for uniforms, breakage, shortages, or other expenses.",
      },
    ],
    signs: [
      "You work more than 40 hours per week but don't receive overtime pay",
      "Your paycheck doesn't reflect all the hours you actually worked",
      "You're required to work through meal breaks without additional pay",
      "Your employer takes illegal deductions from your paycheck",
      "You're paid less than minimum wage (or tipped minimum wage plus tips)",
      "Your tips are shared with managers or non-tipped employees",
      "You're classified as exempt or independent contractor but don't meet the legal criteria",
      "You perform work before clocking in or after clocking out",
    ],
    faqs: [
      {
        question: "What is minimum wage in New York?",
        answer:
          "New York minimum wage varies by location and employer size. As of 2024, it ranges from $15.00 to $16.00 per hour depending on the region. New York City, Long Island, and Westchester have higher minimums than the rest of the state.",
      },
      {
        question: "When am I entitled to overtime pay?",
        answer:
          "Non-exempt employees in New York must receive overtime pay (1.5 times regular rate) for all hours worked over 40 in a workweek. Some employees are exempt from overtime, but employers often misapply exemptions.",
      },
      {
        question: "How far back can I recover unpaid wages?",
        answer:
          "Under New York law, you can recover unpaid wages for up to 6 years. You may also be entitled to liquidated damages (double the unpaid wages), interest, and attorney's fees.",
      },
      {
        question: "What if my employer pays me in cash?",
        answer:
          "Being paid in cash does not exempt your employer from wage and hour laws. You are still entitled to minimum wage, overtime, proper record-keeping, and all other protections regardless of how you're paid.",
      },
    ],
    relatedAreas: ["labor-law-violations", "employment-discrimination", "wrongful-termination"],
  },

  "police-brutality": {
    slug: "police-brutality",
    title: "Police Brutality",
    h1: "New York Police Brutality Lawyer",
    tagline: "Holding Law Enforcement Accountable in New York",
    metaDescription:
      "Experienced New York police brutality attorney fighting for victims of police violence and misconduct. Free consultation. No fee unless we win.",
    heroDescription:
      "Police officers are sworn to protect and serve—not to abuse their power. If you or a loved one has been a victim of police brutality, excessive force, or misconduct in New York, our attorneys will fight to hold the officers and their departments accountable.",
    caseTypes: [
      {
        title: "Excessive Force",
        description:
          "Use of force beyond what is reasonably necessary, including beatings, chokeholds, tasers, and deadly force.",
      },
      {
        title: "Wrongful Shootings",
        description:
          "Police shootings that were unjustified under the circumstances, resulting in death or serious injury.",
      },
      {
        title: "Assault & Battery",
        description:
          "Physical attacks by officers during arrests, detentions, or encounters that cause injury.",
      },
      {
        title: "Wrongful Death by Police",
        description:
          "Fatal encounters with law enforcement where excessive force or misconduct caused the death.",
      },
      {
        title: "Jail & Prison Abuse",
        description:
          "Brutality, assault, or excessive force by corrections officers against incarcerated individuals.",
      },
      {
        title: "Failure to Intervene",
        description:
          "Officers who witness brutality but fail to stop it can also be held liable under federal law.",
      },
    ],
    signs: [
      "You were beaten, struck, or physically harmed by police during an encounter",
      "Officers used a chokehold, taser, or weapon when it wasn't necessary",
      "You suffered injuries during an arrest or while in police custody",
      "Police used force after you were already restrained or compliant",
      "You were injured or assaulted while in jail or prison",
      "Officers fabricated charges to justify their use of force",
      "You witnessed police brutality and officers failed to intervene",
      "A family member was killed or seriously injured by police",
    ],
    faqs: [
      {
        question: "What qualifies as police brutality?",
        answer:
          "Police brutality is the use of excessive, unnecessary, or unreasonable force by law enforcement. This includes physical assault, use of weapons when not warranted, chokeholds, and any force that goes beyond what is reasonably needed to effect an arrest or maintain safety.",
      },
      {
        question: "Can I sue the police for excessive force?",
        answer:
          "Yes. Under 42 U.S.C. § 1983, you can sue police officers who violate your constitutional rights, including the Fourth Amendment right to be free from excessive force. You may also be able to sue the city or municipality under certain circumstances.",
      },
      {
        question: "What damages can I recover in a police brutality case?",
        answer:
          "You may recover compensatory damages for physical injuries, pain and suffering, emotional distress, medical expenses, lost wages, and in egregious cases, punitive damages. Wrongful death cases may include additional damages for surviving family members.",
      },
      {
        question: "Do I need video evidence to prove police brutality?",
        answer:
          "While video evidence is helpful, it is not required. Cases can be proven through witness testimony, medical records documenting injuries, police reports, 911 recordings, and other evidence. An experienced attorney can help gather and present the necessary evidence.",
      },
    ],
    relatedAreas: ["excessive-force", "false-arrest", "civil-rights-violations"],
  },

  "excessive-force": {
    slug: "excessive-force",
    title: "Excessive Force",
    h1: "New York Excessive Force Lawyer",
    tagline: "Fighting Police Excessive Force in New York",
    metaDescription:
      "Experienced New York excessive force attorney representing victims of unreasonable police violence. Free consultation. No fee unless we win.",
    heroDescription:
      "When police use more force than necessary, they violate your constitutional rights. If you've been injured by excessive force during an arrest, detention, or any encounter with law enforcement in New York, our attorneys will fight for the justice and compensation you deserve.",
    caseTypes: [
      {
        title: "Unreasonable Physical Force",
        description:
          "Punches, kicks, strikes, or physical attacks by officers that exceed what is reasonably necessary.",
      },
      {
        title: "Improper Weapon Use",
        description:
          "Unjustified use of tasers, batons, pepper spray, or firearms when less lethal options were available.",
      },
      {
        title: "Chokeholds & Restraints",
        description:
          "Dangerous restraint techniques including chokeholds, positional asphyxia, and prolonged restraint.",
      },
      {
        title: "Force Against Restrained Persons",
        description:
          "Using force against individuals who are already handcuffed, restrained, or not resisting.",
      },
      {
        title: "Force Against Vulnerable Persons",
        description:
          "Excessive force used against minors, elderly individuals, disabled persons, or those experiencing mental health crises.",
      },
      {
        title: "Deadly Force",
        description:
          "Unjustified use of lethal force when the situation did not warrant a deadly response.",
      },
    ],
    signs: [
      "Officers used physical force when you were not resisting or were already restrained",
      "You were tased, pepper sprayed, or struck with a baton without justification",
      "Police used a chokehold or dangerous restraint technique against you",
      "You suffered significant injuries during an encounter with police",
      "Force was used after you were already in handcuffs or complying with commands",
      "Officers used weapons when non-violent alternatives were available",
      "You have visible injuries from a police encounter that seem disproportionate",
      "Multiple officers used force against you when one could have handled the situation",
    ],
    faqs: [
      {
        question: "What constitutes excessive force by police?",
        answer:
          "Excessive force is force that exceeds what a reasonable officer would use under the same circumstances. Courts consider factors like the severity of the crime, whether the suspect posed an immediate threat, and whether the suspect was actively resisting or attempting to flee.",
      },
      {
        question: "How do I prove excessive force was used against me?",
        answer:
          "Evidence can include photographs of injuries, medical records, witness statements, video footage (body cameras, bystander recordings), police reports, and expert testimony. An attorney can help gather and preserve crucial evidence.",
      },
      {
        question: "Can I sue if I was resisting arrest?",
        answer:
          "Yes. Even if you were resisting, officers may only use force that is proportional to the threat. If the force used was excessive given the circumstances, you may still have a valid claim. Minor resistance does not justify severe force.",
      },
      {
        question: "What is the statute of limitations for excessive force claims?",
        answer:
          "In New York, Section 1983 excessive force claims generally have a 3-year statute of limitations from the date of the incident. However, you should consult an attorney promptly to preserve evidence and protect your rights.",
      },
    ],
    relatedAreas: ["police-brutality", "false-arrest", "civil-rights-violations"],
  },

  "false-arrest": {
    slug: "false-arrest",
    title: "False Arrest",
    h1: "New York False Arrest Lawyer",
    tagline: "Fighting Wrongful Arrests Across New York",
    metaDescription:
      "Experienced New York false arrest attorney representing victims of unlawful police detention. Free consultation. No fee unless we win.",
    heroDescription:
      "Being arrested without probable cause is a violation of your constitutional rights. If you were wrongfully arrested, detained without justification, or held without proper legal basis in New York, our false arrest lawyers will fight to hold law enforcement accountable.",
    caseTypes: [
      {
        title: "Arrest Without Probable Cause",
        description:
          "Police cannot arrest you without reasonable grounds to believe you committed a crime. Arrests based on hunches or bias are unlawful.",
      },
      {
        title: "Arrest Without a Warrant",
        description:
          "Most arrests require either a warrant or probable cause for a crime committed in the officer's presence.",
      },
      {
        title: "Wrongful Detention",
        description:
          "Being held by police beyond a reasonable time without charges or being brought before a judge.",
      },
      {
        title: "Mistaken Identity Arrests",
        description:
          "Arrests based on misidentification or confusion with another person, especially when officers fail to verify identity.",
      },
      {
        title: "Pretextual Arrests",
        description:
          "Arrests made for minor offenses as a pretext to search or detain someone for discriminatory reasons.",
      },
      {
        title: "Retaliatory Arrests",
        description:
          "Arrests made in retaliation for exercising constitutional rights like free speech or filming police.",
      },
    ],
    signs: [
      "You were arrested but never charged with a crime, or charges were quickly dropped",
      "Police arrested you without explaining the reason or without probable cause",
      "You were detained for an extended period before being released without charges",
      "You were arrested based on mistaken identity or false information",
      "The arrest appeared to be motivated by your race, religion, or other protected characteristic",
      "You were arrested shortly after exercising your First Amendment rights",
      "Police fabricated or exaggerated evidence to justify your arrest",
      "You were arrested for a minor offense that seemed like a pretext for detention",
    ],
    faqs: [
      {
        question: "What is false arrest?",
        answer:
          "False arrest occurs when law enforcement detains or arrests a person without proper legal authority—typically without probable cause to believe the person committed a crime, or without a valid warrant. It violates the Fourth Amendment protection against unreasonable seizures.",
      },
      {
        question: "Can I sue for false arrest if I was later released?",
        answer:
          "Yes. You may have a false arrest claim even if charges were dropped or you were released without being prosecuted. The violation occurs at the time of the unlawful arrest, regardless of the outcome.",
      },
      {
        question: "What damages can I recover for false arrest?",
        answer:
          "You may recover compensatory damages for time spent detained, emotional distress, humiliation, damage to reputation, lost wages, and physical injuries. Punitive damages may be available in egregious cases.",
      },
      {
        question: "How long do I have to file a false arrest claim in New York?",
        answer:
          "False arrest claims under Section 1983 generally have a 3-year statute of limitations in New York. Claims against the City of New York may require filing a notice of claim within 90 days. Consult an attorney immediately to protect your rights.",
      },
    ],
    relatedAreas: ["malicious-prosecution", "civil-rights-violations", "police-brutality"],
  },

  "malicious-prosecution": {
    slug: "malicious-prosecution",
    title: "Malicious Prosecution",
    h1: "New York Malicious Prosecution Lawyer",
    tagline: "Fighting Wrongful Criminal Charges in New York",
    metaDescription:
      "Experienced New York malicious prosecution attorney representing victims of baseless criminal charges. Free consultation. No fee unless we win.",
    heroDescription:
      "Being wrongfully prosecuted for a crime you didn't commit can destroy your life, reputation, and livelihood. If you were charged with a crime based on false evidence, fabricated testimony, or without probable cause, Jessica will fight for justice.",
    caseTypes: [
      {
        title: "Fabricated Evidence",
        description:
          "Prosecution based on evidence that was manufactured, planted, or falsified by police or prosecutors.",
      },
      {
        title: "False Witness Testimony",
        description:
          "Cases built on coerced, coached, or knowingly false testimony from witnesses or informants.",
      },
      {
        title: "Prosecutorial Misconduct",
        description:
          "Prosecutors who withhold exculpatory evidence, make false statements, or abuse their discretion.",
      },
      {
        title: "Police Misconduct",
        description:
          "Officers who fabricate reports, lie in court, or pursue charges despite knowing the person is innocent.",
      },
      {
        title: "Wrongful Conviction Cases",
        description:
          "Individuals who were convicted and later exonerated may have malicious prosecution claims.",
      },
      {
        title: "Charges Filed Without Probable Cause",
        description:
          "Criminal charges initiated without sufficient evidence, often for improper motives.",
      },
    ],
    signs: [
      "Criminal charges against you were dismissed or you were acquitted",
      "You were prosecuted based on evidence you believe was fabricated or false",
      "Key witnesses later recanted their testimony or were shown to have lied",
      "Prosecutors withheld evidence that would have helped your defense",
      "You believe the prosecution was motivated by personal bias or improper reasons",
      "Police officers gave false testimony at your trial or hearings",
      "You were convicted but later exonerated through DNA or other evidence",
      "The criminal case seemed designed to harass or retaliate against you",
    ],
    faqs: [
      {
        question: "What is malicious prosecution?",
        answer:
          "Malicious prosecution occurs when someone initiates or continues a criminal proceeding against you without probable cause and with malice (improper purpose), and the proceeding ends in your favor. It's a violation of your Fourth Amendment rights.",
      },
      {
        question: "What do I need to prove in a malicious prosecution case?",
        answer:
          "You must prove: (1) a criminal proceeding was initiated against you, (2) the proceeding ended in your favor (dismissal, acquittal), (3) there was no probable cause for the charges, and (4) the proceeding was initiated with malice or improper purpose.",
      },
      {
        question: "Can I sue the prosecutor for malicious prosecution?",
        answer:
          "Prosecutors generally have absolute immunity for their prosecutorial decisions. However, police officers and others involved in fabricating evidence or initiating baseless charges may be liable. Some extreme prosecutorial misconduct may also be actionable.",
      },
      {
        question: "How long do I have to file a malicious prosecution claim?",
        answer:
          "The statute of limitations typically begins when the criminal proceeding ends in your favor. In New York, Section 1983 claims have a 3-year statute of limitations. Consult an attorney promptly after charges are dismissed or you're acquitted.",
      },
    ],
    relatedAreas: ["false-arrest", "civil-rights-violations", "denial-of-fair-trial"],
  },

  "denial-of-fair-trial": {
    slug: "denial-of-fair-trial",
    title: "Denial of Fair Trial",
    h1: "New York Denial of Fair Trial Lawyer",
    tagline: "Protecting Your Right to a Fair Trial in New York",
    metaDescription:
      "Experienced New York attorney fighting denial of fair trial claims and due process violations. Free consultation. No fee unless we win.",
    heroDescription:
      "The Constitution guarantees your right to a fair trial. When police fabricate evidence, prosecutors hide exculpatory material, or the justice system fails you, your fundamental rights are violated. Jessica fights for those denied their day in court.",
    caseTypes: [
      {
        title: "Brady Violations",
        description:
          "Prosecutors who fail to disclose evidence favorable to the defendant violate the Constitution and may be liable.",
      },
      {
        title: "Fabrication of Evidence",
        description:
          "Police or prosecutors who create, plant, or falsify evidence deprive defendants of fair trials.",
      },
      {
        title: "Coerced Confessions",
        description:
          "Confessions obtained through coercion, threats, or improper interrogation techniques violate due process.",
      },
      {
        title: "Witness Tampering",
        description:
          "Coaching witnesses, threatening them, or inducing false testimony undermines the right to a fair trial.",
      },
      {
        title: "Destruction of Evidence",
        description:
          "Intentionally destroying evidence that could help the defense violates due process rights.",
      },
      {
        title: "Ineffective Assistance",
        description:
          "When combined with government misconduct, ineffective defense counsel can support fair trial claims.",
      },
    ],
    signs: [
      "Evidence that could have helped your defense was hidden or destroyed",
      "You later learned that witnesses were coached, threatened, or gave false testimony",
      "Your confession was coerced through threats, lies, or improper interrogation",
      "Police or prosecutors fabricated evidence used against you",
      "Exculpatory evidence was not disclosed to your defense attorney",
      "You were convicted based on evidence later shown to be false or unreliable",
      "Key evidence favorable to your defense mysteriously disappeared",
      "Government witnesses received undisclosed benefits for their testimony",
    ],
    faqs: [
      {
        question: "What is a denial of fair trial claim?",
        answer:
          "A denial of fair trial claim arises when government officials—typically police or prosecutors—engage in misconduct that deprives a criminal defendant of their constitutional right to a fair trial. This includes fabricating evidence, hiding exculpatory evidence, or securing false testimony.",
      },
      {
        question: "What is a Brady violation?",
        answer:
          "A Brady violation occurs when prosecutors fail to disclose evidence favorable to the defendant that is material to guilt or punishment. Under Brady v. Maryland, prosecutors have a constitutional duty to turn over such evidence, and failure to do so violates due process.",
      },
      {
        question: "Can I sue for denial of fair trial after being convicted?",
        answer:
          "Generally, you must first have your conviction overturned before pursuing a civil claim. Once exonerated, you may have claims against officers who fabricated evidence, withheld evidence, or otherwise caused your wrongful conviction.",
      },
      {
        question: "What damages are available for denial of fair trial?",
        answer:
          "You may recover compensatory damages for time wrongfully incarcerated, lost wages and earning capacity, emotional distress, damage to reputation, and in egregious cases, punitive damages. Exonerees may also be eligible for state compensation programs.",
      },
    ],
    relatedAreas: ["malicious-prosecution", "false-arrest", "civil-rights-violations"],
  },
};

// Helper function to get practice area by slug
export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas[slug];
}

// Get all practice area slugs for static generation
export function getAllPracticeAreaSlugs(): string[] {
  return Object.keys(practiceAreas);
}

// Get related practice areas as full objects
export function getRelatedPracticeAreas(slug: string): PracticeArea[] {
  const area = practiceAreas[slug];
  if (!area) return [];
  return area.relatedAreas
    .map((relatedSlug) => practiceAreas[relatedSlug])
    .filter(Boolean);
}

// Shared data across all practice areas
export const sharedData = {
  stats: [
    { value: "$12M+", label: "Recovered for New York Workers" },
    { value: "500+", label: "Cases Successfully Handled" },
    { value: "98%", label: "Success Rate" },
  ],
  trustSignals: [
    { icon: "Award", text: "20+ Years Experience" },
    { icon: "Scale", text: "No Fee Unless We Win" },
    { icon: "Clock", text: "Free Case Review" },
    { icon: "MapPin", text: "Serving All of New York" },
  ],
  areasServed: [
    "Manhattan",
    "Brooklyn",
    "Queens",
    "The Bronx",
    "Staten Island",
    "Long Island",
    "Westchester",
    "New York State",
  ],
  phone: "(646) 241-9800",
};
