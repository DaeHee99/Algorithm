function solution(skill, skill_trees) {
    let answer = 0;
    const skill_list = skill.split("");
    
    skill_trees.forEach(item => {
        const clean = item.split("").filter(char => skill_list.includes(char));
        if (skill.startsWith(clean.join(""))) answer++;
    });
    
    return answer;
}
