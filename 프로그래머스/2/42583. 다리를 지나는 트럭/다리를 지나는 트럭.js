function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge_weight_sum = 0;
    const bridge = Array.from({ length: bridge_length }, () => 0);
    
    while (bridge_weight_sum || truck_weights.length) {
        answer++;
        bridge_weight_sum -= bridge[0];
        bridge.shift();
        
        if (truck_weights[0] && truck_weights[0] + bridge_weight_sum <= weight) {
            const new_truck = truck_weights.shift();
            bridge.push(new_truck);
            bridge_weight_sum += new_truck;
        }
        else bridge.push(0);
    }
    
    return answer;
}