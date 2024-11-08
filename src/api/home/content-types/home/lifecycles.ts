module.exports = {
  async afterFindOne(event: { result: any; params: any }) {
    if (!event.result || !event.result.content) {
      return;
    }

    const leaderboardComponent = event.result.content.find(
      (item: any) => item.__component === 'home.leaderboard-sectie'
    );

    if (!leaderboardComponent || !leaderboardComponent.koffie) {
      return;
    }

    // Calculate total cups of coffee
    leaderboardComponent.totalCups = calculateTotalCups(
      leaderboardComponent.koffie.codios_startdatum,
      leaderboardComponent.koffie.koffie_per_dag
    );

    // Calculate Spotify minutes with fallback value of 243
    leaderboardComponent.spotify_minuten = calculateSpotifyMinutes(leaderboardComponent.spotify?.minuten_per_dag);
  },
};

// Helper function to calculate total cups of coffee
function calculateTotalCups(startDateString: string, cupsPerDay: number): number {
  const startDate = new Date(startDateString);
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  let totalCups = 0;

  for (let date = startDate; date <= currentDate; date = new Date(date.getTime() + oneDay)) {
    const dayOfWeek = date.getDay();
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      totalCups += cupsPerDay;
    }
  }

  return totalCups;
}

// Helper function to calculate total Spotify minutes
function calculateSpotifyMinutes(minutesPerDay: number): number {
  const startDate = new Date('2024-01-01');
  const currentDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  // Calculate the difference in days
  const diffInDays = Math.floor((currentDate.getTime() - startDate.getTime()) / oneDay);

  // Calculate total minutes
  const totalMinutes = diffInDays * minutesPerDay;

  return totalMinutes;
}