def solution(jobs):
    n = len(jobs)
    answer = 0
    time = 0
    
    jobs.sort(key=lambda x: x[0])
    
    while len(jobs) > 0:
        waiting = [job for job in jobs if job[0] <= time]
        
        if len(waiting) == 0:
            time = jobs[0][0]
        else:
            waiting.sort(key=lambda x: x[1])
            
            req, usage = waiting[0]
            time += usage
            answer += time - req
            
            jobs = [job for job in jobs if job[0] != req or job[1] != usage]
    
    return answer // n
