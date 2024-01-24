function solution(participant, completion) {
    const map = new Map();
    
    participant.forEach(name => {
        map.set(name, (map.get(name) || 0) + 1);
    });
    
    completion.forEach(name => {
        map.set(name, map.get(name) - 1);
    });
    
    for (const [name, value] of map) {
      if (value === 1) return name;
    }
}
