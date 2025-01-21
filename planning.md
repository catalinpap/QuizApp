App quiz

# Use case
An admin can create tests which can be published and shared
for anyone to take

# Modules
1. Client (Next.js)
2. Server (Spring Boot)
3. DB (MongoDB?)

## Models
1. Quiz class

```java
class Quiz {
    String id;
    Item[] items;
    int duration;
    double minScore;
}
```

2. Item class

```java
class Item {
    String id;
    String question;
    Answer[] answers;
    int points;
    int itemNumber;
}
```

3. Answer class

```java
class Answer {
    String label;
    boolean correct;
}
```
