function checkVotingEligibility(age) {
    if (age < 0) {
        return "Age cannot be negative.";
    } else if (age >= 18) {
        return "You are eligible to vote.";
    } else {
        return "You are not eligible to vote yet.";
    }
}
