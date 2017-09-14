package ch.nicosb.opensource.myknowledgebase.controller;

import ch.nicosb.opensource.myknowledgebase.model.Entry;
import ch.nicosb.opensource.myknowledgebase.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;

/**
 * The rest interface for CRUD operations concerning the Entry model.
 */
@Controller
public class EntryController {

    @Autowired
    private EntryRepository entryRepository;

    @CrossOrigin
    @RequestMapping(value = "/entry", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    Iterable<Entry> findEntries(@RequestParam(required = false) String[] tags) {
        if (tags != null) {
            return entryRepository.findDistinctByTagsIn(Arrays.asList(tags));
        } else {
            return entryRepository.findAll();
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/entry", method = RequestMethod.POST, produces = "application/json", consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> createEntry(@RequestBody Entry entry) {
        Entry storedEntry = entryRepository.save(entry);

        return new ResponseEntity<>(storedEntry, HttpStatus.CREATED);
    }

    @CrossOrigin
    @RequestMapping(value = "/entry/{id}", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> findEntryById(@PathVariable Long id) {
        Entry entry = entryRepository.findOne(id);
        if (entry != null) {
            return new ResponseEntity<>(entry, HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @CrossOrigin
    @RequestMapping(value = "/entry/{id}", method = RequestMethod.PUT, produces = "application/json", consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Entry> updateEntry(@PathVariable Long id, @RequestBody Entry entry) {
        if (entryRepository.findOne(id) != null) {
            Entry updatedEntry = entryRepository.save(entry);
            return new ResponseEntity<>(updatedEntry, HttpStatus.ACCEPTED);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
