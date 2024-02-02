def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge_weight_sum = 0
    bridge = [0] * bridge_length
    
    while truck_weights:
        answer += 1
        bridge_weight_sum -= bridge.pop(0)
        
        if truck_weights[0] + bridge_weight_sum <= weight:
            bridge.append(truck_weights.pop(0))
            bridge_weight_sum += bridge[-1]
        else:
            bridge.append(0)
    
    return answer + bridge_length