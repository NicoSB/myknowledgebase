package ch.nicosb.opensource.myknowledgebase.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Required;

import javax.persistence.*;
import java.util.List;

/**
 * The entry class is stored in the entry table.
 */
@Getter
@Setter
@Entity
@Table(name = "entries")
public class Entry {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;
    private String title;
    private String description;
    private String codeSnippet;
    private String url;

    @ElementCollection(targetClass = String.class)
    private List<String> tags;
}
