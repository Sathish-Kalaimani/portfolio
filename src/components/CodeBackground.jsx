import React from 'react';
import './CodeBackground.css';

export function CodeBackground() {
  const javaCode = `public class Portfolio {
  public static void main(String[] args) {
    System.out.println("Hello World");
    // Building scalable solutions
    Spring.run(Application.class);
  }
}

@RestController
public class Engineer {
  @GetMapping("/skills")
  public List<String> getSkills() {
    return Arrays.asList(
      "Java", "Spring Boot",
      "React", "Microservices"
    );
  }
}

interface Developer {
  void code();
  void debug();
  void deploy();
}

public void build() {
  for(int i=0; i<15; i++) {
    learn();
    innovate();
  }
}

@Service
public class Experience {
  private int years = 15;
  
  public void architect() {
    design();
    implement();
    optimize();
  }
}`;

  return (
    <div className="code-background">
      <pre className="code-text">{javaCode}</pre>
      <pre className="code-text code-text-2">{javaCode}</pre>
    </div>
  );
}
