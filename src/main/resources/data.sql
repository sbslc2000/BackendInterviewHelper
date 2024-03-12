insert into quiz (question, level, category)
values
    -- Algorithm Level 1
    ('동적 계획법(DP, Dynamic Programming)에 대해 설명해주세요.', 1, 'ALGORITHM'),
    ('재귀 알고리즘에 대해 설명해주세요.', 1, 'ALGORITHM'),

    -- Common Level 1
    ('절차지향 프로그래밍과 객체지향 프로그래밍의 차이점에 대해 설명해주세요.', 1, 'COMMON'),
    ('TDD(Test-Driven-Development)의 개념에 대해 설명해주세요.', 1, 'COMMON'),
    ('테스트 코드를 작성 해야하는 이유에 대해 아는대로 설명해주세요.', 1, 'COMMON'),
    ('프레임워크와 라이브러리의 차이에 대해 설명해주세요.', 1, 'COMMON'),
    ('SPA와 MPA에 대해 설명해주세요', 1, 'COMMON'),
    ('CSR과 SSR에 대해 설명해주세요', 1, 'COMMON'),

    -- DataStructure Level 1
    ('연결 리스트에서 값을 찾는데 시간 복잡도가 얼마나 걸리는가? 더 개선된 구조가 있는지? 단점은?', 1, 'DATA_STRUCTURE'),
    ('Vector와 List의 차이를 설명해주세요.', 1, 'DATA_STRUCTURE'),
    ('Array의 가장 큰 특징과 그로 인해 발생하는 장점과 단점에 대해 설명해주세요.', 1, 'DATA_STRUCTURE'),
    ('HashTable 자료구조를 사용하면 데이터 검색 시 시간 복잡도가 O(1)인데, 왜 그런가요?', 1, 'DATA_STRUCTURE'),

    -- DB Level 1
    ('JDBC란 무엇인가요? 왜 존재할까요?', 1, 'DB'),
    ('RDB와 NoSQL의 차이에 대해 설명해 보세요.', 1, 'DB'),
    ('데이터베이스 언어(DDL, DML, DCL)에 대해 설명해주세요.', 1, 'DB'),
    ('SELECT 쿼리 문법의 키워드 순서를 말씀해주세요.', 1, 'DB'),
    ('DELETE, TRUNCATE, DROP의 차이를 설명해주세요.', 1, 'DB'),
    ('트랜잭션이란 무엇인지 설명해주세요.', 1, 'DB'),
    ('동적 쿼리란 무엇이고 언제 동적 쿼리를 사용하나요?', 1, 'DB'),

    -- DesignPattern Level 1
    ('싱글톤 패턴에 대해 설명해주세요.', 1, 'DESIGN_PATTERN'),

    -- Java Level 1
    ('서블릿(Servlet)에 대해 설명해주세요.', 1, 'JAVA'),
    ('Java의 특징을 설명해주세요.', 1, 'JAVA'),
    ('Java에서 제공하는 원시 타입들에 무엇이 있고, 각각 몇 바이트를 차지하나요?', 1, 'JAVA'),
    ('오버라이딩(Overriding)과 오버로딩(Overloading)에 대해 설명해주세요.', 1, 'JAVA'),
    ('불변 객체나 final을 굳이 사용해야 하는 이유가 있을까요?', 1, 'JAVA'),
    ('Optional에 대해 설명해주세요.', 1, 'JAVA'),
    ('컬렉션 프레임워크에 대해 설명해주세요.', 1, 'JAVA'),
    ('Wrapper Class란 무엇이며, Boxing과 UnBoxing은 무엇인지 설명해주세요.', 1, 'JAVA'),
    ('Error와 Exception의 차이를 설명해주세요.', 1, 'JAVA'),
    ('final / finally / finalize 의 차이를 설명해주세요.', 1, 'JAVA'),
    ('Call By Value와 Call By Reference의 차이에 대해 설명해주세요.', 1, 'JAVA'),

    -- Network Level 1
    ('HTTP란 무엇인가요?', 1, 'NETWORK'),
    ('HTTP 상태 코드에 대해 아는 대로 말해보세요.', 1, 'NETWORK'),
    ('GET과 POST의 차이점에 대해서 설명해보세요.', 1, 'NETWORK'),
    ('HTTP Method가 무엇이며 이것이 하는 역할에 대해서 설명해보세요', 1, 'NETWORK'),

    -- OOP Level 1
    ('객체지향 프로그래밍(OOP)에 대해 설명해주세요.', 1, 'OOP'),
    ('클래스와 객체에 대해 설명해주세요.', 1, 'OOP'),
    ('생성자(Constructor)에 대해 설명해주세요.', 1, 'OOP'),
    ('static에 대해 설명해주세요.', 1, 'OOP'),
    ('접근 제어자는 어떤 역할을 하나요?', 1, 'OOP'),

    -- OS Level 1
    ('메인 메모리가 존재하는 이유가 무엇일까요?', 1, 'OS'),
    ('병렬 프로그래밍에 대해 아나요? 병렬 프로그래밍을 해본 적이 있다면 그 경험에 대해 말해주세요.', 1, 'OS'),
    ('OS가 하는 일에는 어떤 것들이 있나요?', 1, 'OS'),

    -- Spring Level 1
    ('Spring Framework에 대해 설명해주세요.', 1, 'SPRING'),
    ('@RequestBody, @RequestParam, @ModelAttribute의 차이를 설명해주세요', 1, 'SPRING'),
    ('Spring Bean이란 무엇인가요?', 1, 'SPRING'),

    -- Web Level 1
    ('CI/CD란? 적용해 본 적이 있나요?', 1, 'WEB'),
    ('WAS(Web Application Server)와 WS(Web Server)의 차이를 설명해주세요.', 1, 'WEB'),

    -- Algorithm Level2
    ('동적 계획법(DP, Dynamic Programming)이 갖는 2가지 조건은 무엇인가요?', 2, 'ALGORITHM'),
    ('버블 정렬(Bubble Sort)에 대해 설명해주세요.', 2, 'ALGORITHM'),
    ('선택 정렬(Selection Sort)에 대해 설명해주세요.', 2, 'ALGORITHM'),
    ('병합 정렬(Merge Sort)에 대해 설명해주세요.', 2, 'ALGORITHM'),

    -- Common Level 2
    ('JWT란 무엇인가요? 어떤 장점이 있나요?', 2, 'COMMON'),
    ('MSA(Microservice Architecture)가 뭔지 설명해주세요.', 2, 'COMMON'),
    ('직렬화(Serialize)에 대해 설명해주세요.', 2, 'COMMON'),
    ('쿠키와 세션의 차이에 대해 설명해주세요.', 2, 'COMMON'),

    -- Data Structure Level 2
    ('Array를 적용시키면 좋을 데이터의 예를 구체적으로 들어주세요. 구체적 예시와 함께 Array를 적용하면 좋은 이유, 그리고 Array를 사용하지 않으면 어떻게 되는지 함께 설명해주세요.', 2, 'DATA_STRUCTURE'),
    ('Stack과 Queue의 차이점에 대해서 알려주세요. 또한 두 자료구조의 구체적인 사용법을 들어주세요.', 2, 'DATA_STRUCTURE'),


    -- DB Level 2
    ('DB에서 인덱스를 잘 사용하면 어떤 장점이 있을까요?', 2, 'DB'),
    ('RDBMS와 NoSQL은 어느 경우에 적합한가요?', 2, 'DB'),
    ('Database Index에 대해 설명해주시고, 장/단점에 대해 아는대로 말해주세요.', 2, 'DB'),
    ('정규화에 대해 설명해주세요.', 2, 'DB'),
    ('정규화에는 어떤 장점이 있고 어떤 단점이 있는지 아는대로 설명해주세요', 2, 'DB'),
    ('sql group by의 역할에 대해 설명해주세요.', 2, 'DB'),
    ('SQL에서 HAVING과 WHERE의 차이를 설명해주세요.', 2, 'DB'),
    ('데이터베이스 이상 현상(Anomaly)의 종류에 대해 설명해주세요.', 2, 'DB'),

    -- Design Pattern Level 2
    ('의존성 주입(DI, Dependency Injection)에 대해 설명해주세요.', 2, 'DESIGN_PATTERN'),
    ('제어의 역전(IoC, Inversion of Control)에 대해 아는대로 설명해주세요.', 2, 'DESIGN_PATTERN'),
    ('MVC 패턴에 대해 아는대로 설명해보세요', 2, 'DESIGN_PATTERN'),

    -- Java Level 2
    ('가비지 컬렉션에 대해 아는 대로 설명하시오', 2, 'JAVA'),
    ('서블릿의 동작 방식에 대해 설명해주세요.', 2, 'JAVA'),
    ('JVM의 역할에 대해 설명해주세요.', 2, 'JAVA'),
    ('Java의 컴파일 과정에 대해 설명해주세요.', 2, 'JAVA'),
    ('try-with-resources에 대해 설명해주세요.', 2, 'JAVA'),
    ('불변 객체가 무엇인지 설명하고 대표적인 Java의 예시를 설명해주세요.', 2, 'JAVA'),
    ('추상 클래스와 인터페이스를 설명해주시고, 차이에 대해 설명해주세요.', 2, 'JAVA'),
    ('클래스 멤버 변수 초기화 순서에 대해 설명해주세요.', 2, 'JAVA'),
    ('자바의 메모리 영역에 대해 설명해주세요.', 2, 'JAVA'),
    ('synchronized에 대해 아는 대로 말해주세요.', 2, 'JAVA'),
    ('String 객체가 불변인 이유에 대해 아는대로 설명해주세요.', 2, 'JAVA'),
    ('제네릭에 대해 설명해주시고, 왜 쓰는지 말씀해주세요.', 2, 'JAVA'),
    ('직렬화를 할 때 SerialVersionUID를 선언해야 하는 이유에 대해 설명해주세요.', 2, 'JAVA'),
    ('CheckedException과 UnCheckedException의 차이를 설명해주세요.', 2, 'JAVA'),
    ('Set과 Map의 타입이 Wrapper Class가 아닌 Object를 받을 때 중복 검사는 어떻게 할건지 설명해주세요.', 2, 'JAVA'),

    -- JPA Level 2
    ('JPA N + 1 문제와 발생하는 이유 그리고 해결하는 방법을 설명해주세요.', 2, 'JPA'),
    ('JPA와 같은 ORM을 사용하면서 쿼리가 복잡해지는 경우에는 어떻게 해결하는게 좋을까요?', 2, 'JPA'),
    ('JPA 즉시 로딩과 지연 로딩의 차이에 대해 알려주세요', 2, 'JPA'),
    ('JPA의 1차 캐시에 대해서 설명해주세요.', 2, 'JPA'),
    ('JPA의 변경 감지는 어떤 일을 하나요?', 2, 'JPA'),

    -- Network Level 2
    ('TCP와 UDP의 차이점에 대해 설명해보세요.', 2, 'NETWORK'),
    ('HTTP와 HTTPS의 차이점에 대해서 설명해보세요.', 2, 'NETWORK'),

    -- OOP Level 2
    ('접근 제한자(Access Modifier)에 대해 설명해주세요.', 2, 'OOP'),
    ('Inner Class(내부 클래스)의 장점에 대해 설명해주세요.', 2, 'OOP'),
    ('객체지향의 설계원칙 5가지에 대해 설명해주세요.', 2, 'OOP'),

    -- OS Level 2
    ('컨텍스트 스위칭에 대해 설명해보세요.', 2, 'OS'),
    ('프로세스와 스레드의 차이를 설명해보세요.', 2, 'OS'),
    ('LRU 페이지 교체 알고리즘에 대해 설명해주세요.', 2, 'OS'),
    ('멀티 쓰레드의 동시성과 병렬성을 설명해주세요.', 2, 'OS'),
    ('동기와 비동기의 차이에 대해 설명해주세요.', 2, 'OS'),
    ('선점형 스케줄링과 비선점형 스케줄링의 차이를 설명해주세요.', 2, 'OS'),
    ('Critical Section(임계영역)에 대해 설명해주세요.', 2, 'OS'),
    ('병렬 프로그래밍을 할 때 어떤 부분을 유의해야 하나요? 세마포어와 뮤텍스에 대해 알고 있나요? 생길 수 있는 문제는?', 2, 'OS'),

    -- Spring Level 2
    ('Spring Boot와 Spring Framework의 차이점을 설명해주세요.', 2, 'SPRING'),
    ('Spring MVC에 대해 설명해주세요.', 2, 'SPRING'),
    ('스프링에서 빈(Bean)을 등록하는 방법에 대해 말해보세요.', 2, 'SPRING'),
    ('스프링 빈의 라이프사이클은 어떻게 관리되는지 설명해주세요.', 2, 'SPRING'),
    ('Spring Filter와 Interceptor의 차이에 대해 설명하고, 사용 예시를 설명해주세요.', 3, 'SPRING'),
    ('관점지향 프로그래밍(AOP, Aspect Oriented Programming)는 무엇이고, 언제 사용할 수 있을까요?', 2, 'SPRING'),
    ('Spring의 스코프 프로토 타입 빈에 대해 설명해주세요', 2, 'SPRING'),
    ('@Transactional의 동작 원리에 대해 설명해주세요.', 2, 'SPRING'),
    ('VO와 BO, DAO, DTO에 대해 설명해주세요.', 2, 'SPRING'),
    ('@Transactional에 readOnly 속성을 사용하는 이유에 대해서 설명해주세요.', 2, 'SPRING'),

    -- Web Level 2
    ('RESTful이란 무엇인가요? 이것에 대해서 아는대로 설명해보세요.', 2, 'WEB'),
    ('CORS란 무엇이며 이것에 대해서 설명해보세요.', 2, 'WEB'),
    ('SQL Injection이 무엇인지 설명해주세요.', 2, 'WEB'),
    ('CORS(교차 출처 리소스 공유, Cross-Origin Resource Sharing)에 대해 설명해주세요.', 2, 'WEB'),

    -- Algorithm Level 3
    ('퀵 정렬(Quick Sort)에 대해 설명해주세요.', 3, 'ALGORITHM'),

    -- Common Level 3
    ('대칭키, 비대칭키 암호화 방식에 대해 설명해주세요.', 3, 'COMMON'),
    ('DDD(Domain-Driven-Design)에서 얘기하는 계층과 각각의 역할에 대해 설명해 주세요.', 3, 'COMMON'),
    ('하나의 비지니스 로직을 작성할 때 어느 수준으로 작성하는지, 무엇을 중요하게 생각하는지 얘기해주세요', 3, 'COMMON'),

    -- Data Structure 3
    ('HashTable에서 데이터 공간에 중복이 발생한 경우 어떻게 해결할 수 있나요?', 3, 'DATA_STRUCTURE'),

    -- DB Level 3
    ('역정규화를 하는 이유에 대해 아는대로 설명해주세요.', 3, 'DB'),
    ('트랜잭션의 특성(ACID)에 대해 설명해주세요.', 3, 'DB'),
    ('DB 락에 대해 설명해주세요.', 3, 'DB'),
    ('Elastic Search의 키워드 검색과 RDBMS의 LIKE 검색의 차이에 대해 설명해주세요.', 3, 'DB'),
    ('옵티마이저(Optimizer)에 대해 아는대로 말해주세요.', 3, 'DB'),
    ('DB 튜닝(Tuning)이 무엇인지 그리고 튜닝의 3단계에 대해 설명해주세요.', 3, 'DB'),
    ('inner join과 outer join의 차이를 설명해주세요.', 3, 'DB'),
    ('데이터베이스 클러스터링과 리플리케이션의 차이에 대해 설명해주세요.', 3, 'DB'),
    ('Database의 트리거(Trigger)에 대해 설명해주세요.', 3, 'DB'),

    --Design Pattern 3
    ('전략 패턴이 무엇인가요? 어떤 경우에 사용하나요?', 3, 'DESIGN_PATTERN'),
    ('데코레이터 패턴은 언제 사용하나요? 프록시와 다른 점은 무엇인가요?', 3, 'DESIGN_PATTERN'),

    -- Java Level 3
    ('Lombok 라이브러리에 대해 알고 있나요? 알고 있다면 롬복이 만드는 메소드들이 생성되는 시점은 언제인가요?', 3, 'JAVA'),
    ('String, StringBuffer, StringBuilder의 차이를 설명해주세요.', 3, 'JAVA'),
    ('리플렉션(Reflection)이란 무엇인지 설명해주세요.', 3, 'JAVA'),

    -- OS Level 3
    ('뮤텍스(Mutex)와 세마포어(Semaphore)의 차이에 대해 설명해주세요.', 3, 'OS'),
    ('페이지 교체 알고리즘에 대해 설명해주세요.', 3, 'OS'),
    ('데드락에 대해 설명해주세요. 데드락이 일어나기 위한 조건에는 어떤 것들이 있나요?', 3, 'OS'),
    ('콘보이 현상(convoy effect)이란 무엇이고, 콘보이 현상이 발생될 수 있는 CPU 스케줄러 알고리즘은 무엇인지 설명해주세요.', 3, 'OS'),

    -- Spring Level 3
    ('@Transactional를 스프링 Bean의 메소드 A에 적용하였고, 해당 Bean의 메소드 B가 호출되었을 때, B 메소드 내부에서 A 메소드를 호출하면 어떤 요청 흐름이 발생하는지 설명해주세요.',
     3, 'SPRING'),
    ('A 라는 Service 객체의 메소드가 존재하고, 그 메소드 내부에서 로컬 트랜잭션 3개(다른 Service 객체의 트랜잭션 메소드를 호출했다는 의미)가 존재한다고 할 때, @Transactional을 A 메소드에 적용하면 어떤 요청 흐름이 발생하는지 설명해주세요.',
     3, 'SPRING'),

    -- Web Level 3
    ('https://www.google.com/에 접속할 때 일어나는 일을 최대한 자세히 설명하여라.', 3, 'WEB'),
    ('OAuth 2.0의 흐름에 대해 간단히 설명해주세요.', 3, 'WEB'),
    ('대용량 트래픽에서 장애가 발생하면 어떻게 대응할 것인가요?', 3, 'WEB'),
    ('CSRF(Cross-site request forgery)에 대해 설명하고, 이를 막기 위한 방법에 대해 설명해주세요.', 3, 'WEB'),
    ('초당 100만개 씩 들어오는 요청에 대해 10000번째로 들어온 요청의 사용자를 어떻게 찾을 것인지 설명해주세요.', 3, 'WEB'),































