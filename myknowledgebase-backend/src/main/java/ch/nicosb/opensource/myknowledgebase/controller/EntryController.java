package ch.nicosb.opensource.myknowledgebase.controller;

import ch.nicosb.opensource.myknowledgebase.model.Entry;
import ch.nicosb.opensource.myknowledgebase.repository.EntryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

/**
 * The rest interface for CRUD operations concerning the Entry model.
 */
@Slf4j
@Controller
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;

    @CrossOrigin
    @RequestMapping(value = "/entry", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Iterable<Entry> findEntries(@RequestParam(required = false) String[] tags) {
        if (tags != null) {
            log.info("Find all entries with tags: {}.", Arrays.toString(tags));
            return entryRepository.findDistinctByTagsIn(Arrays.asList(tags));
        } else {
            log.info("Find all entries.");
            return entryRepository.findAll();
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/entry", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> createEntry(@RequestBody Entry entry) {
        Entry storedEntry = entryRepository.save(entry);
        log.info("Create entry with id [{}].", storedEntry.getId());

        return new ResponseEntity<>(storedEntry, HttpStatus.CREATED);
    }

    @CrossOrigin
    @RequestMapping(value = "/entry/{id}", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> findEntryById(@PathVariable Long id) {
        Entry entry = entryRepository.findOne(id);
        if (entry != null) {
            log.info("Find entry with id [{}].", id);
            return new ResponseEntity<>(entry, HttpStatus.OK);
        }

        log.warn("Could not find entry with id [{}].", id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/entry/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> updateEntry(@PathVariable Long id, @RequestBody Entry entry) {
        if (entryRepository.findOne(id) != null) {
            Entry updatedEntry = entryRepository.save(entry);
            log.info("Updated entry with id [{}].", id);
            return new ResponseEntity<>(updatedEntry, HttpStatus.ACCEPTED);
        }

        log.warn("Failed to update Entry with id [{}] - could not find entry.", id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/entry/{id}", method = RequestMethod.DELETE, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Void> deleteEntry(@PathVariable Long id) {
        if (entryRepository.findOne(id) != null) {
            entryRepository.delete(id);
            log.info("Deleted entry with id [{}].", id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }

        log.warn("Failed to delete Entry with id [{}] - could not find entry.", id);
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
