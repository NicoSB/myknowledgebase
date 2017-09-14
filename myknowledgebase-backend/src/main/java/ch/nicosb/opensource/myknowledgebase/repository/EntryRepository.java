package ch.nicosb.opensource.myknowledgebase.repository;

import ch.nicosb.opensource.myknowledgebase.model.Entry;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * The interface of the entry CRUD repository.
 */
@Repository
public interface EntryRepository extends CrudRepository<Entry, Long>{

    Iterable<Entry> findDistinctByTagsIn(List<String> tags);
}
