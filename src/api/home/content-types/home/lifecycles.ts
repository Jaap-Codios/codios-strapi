
module.exports = {
  async afterFindOne(event: { result: any; params: any }) {
    
    if (!event.result || !event.result.content) {
      return;
    }

    const greetingComponent = event.result.content.find(
      (item: any) => item.__component === 'home.leaderboard-sectie'
    );

    if (!greetingComponent || !greetingComponent.koffie) {
      return;
    }

    const startDate = new Date(greetingComponent.koffie.codios_startdatum);
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000;

    let totalCups = 0;

    for (
      let date = startDate;
      date <= currentDate;
      date = new Date(date.getTime() + oneDay)
    ) {
      const dayOfWeek = date.getDay();
      if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        totalCups += greetingComponent.koffie.koffie_per_dag;
      }
    }

    greetingComponent.totalCups = totalCups;
  },
};