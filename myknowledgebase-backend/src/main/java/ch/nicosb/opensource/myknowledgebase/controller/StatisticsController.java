package ch.nicosb.opensource.myknowledgebase.controller;

import ch.nicosb.opensource.myknowledgebase.model.Entry;
import ch.nicosb.opensource.myknowledgebase.repository.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Controller
public class StatisticsController {

    @Autowired
    private EntryRepository entryRepository;

    @CrossOrigin
    @RequestMapping(value = "/statistics/tag", method = RequestMethod.GET, produces = "application/json")
    @ResponseBody
    public List<String> findAllTags() {
        Iterable<Entry> entries = entryRepository.findAll();
        Set<String> tagSet = new HashSet<>();
        entries.forEach(entry -> {
            tagSet.addAll(entry.getTags());
        });

        ArrayList<String> tags = new ArrayList<>();
        tags.addAll(tagSet);

        return tags;
    }

    @CrossOrigin
    @RequestMapping(value = "/statistics/tag/count", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody int getTagCount() {
       return findAllTags().size();
    }

    @CrossOrigin
    @RequestMapping(value = "/statistics/entry/count", method = RequestMethod.GET, produces = "application/json")
    public @ResponseBody Long getEntryCount() {
        return entryRepository.count();
    }
}
