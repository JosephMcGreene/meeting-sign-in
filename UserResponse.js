class UserResponse {
  constructor(
    name,
    businessHealthRating,
    personalHealthRating,
    relationshipsHealthRating,
    monthlyRating,
    monthlyResponse,
    radio
  ) {
    this.name = name;
    this.businessHealth = businessHealthRating;
    this.personalHealth = personalHealthRating;
    this.relationshipsHealth = relationshipsHealthRating;
    this.monthlyRating = monthlyRating;
    this.monthlyQ2 = monthlyResponse;
    this.radio = radio;
  }
}
