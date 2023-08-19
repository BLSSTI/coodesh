const  getUniquePlansWithPriority = (plans)  =>{
    const uniquePlansMap = new Map();
  
    plans.forEach(plan => {
      const { name, localidade, schedule } = plan;
      const { nome, prioridade } = localidade;
  
      const key = `${name}-${nome}`;
      if (!uniquePlansMap.has(key) || uniquePlansMap.get(key).prioridade < prioridade) {
        uniquePlansMap.set(key, { ...plan, key, schedule: new Date(schedule.startDate) });
      }
    });
  
    return Array.from(uniquePlansMap.values());
  }
  
const sortPlansByPriorityAndDate = (plans) => {
  plans.sort((a, b) => {
    if (a.localidade.prioridade !== b.localidade.prioridade) {
      return b.localidade.prioridade - a.localidade.prioridade;
    }
    return new Date(b.schedule.startDate).getTime() - new Date(a.schedule.startDate).getTime();
  });
}

  const filterValidPlans = (plans, currentDate) => {
    return plans.filter(plan => new Date(plan.schedule.startDate).getTime() < currentDate.getTime());
}
  
export {getUniquePlansWithPriority, sortPlansByPriorityAndDate,filterValidPlans}