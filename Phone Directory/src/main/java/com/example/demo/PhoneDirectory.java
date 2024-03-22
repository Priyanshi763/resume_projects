package com.example.demo;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;

    public TrieNode() {
        this.children = new HashMap<>();
        this.isEndOfWord = false;
    }
}
@Component
public class PhoneDirectory {
    private TrieNode root;

    public PhoneDirectory() {
        this.root = new TrieNode();
    }

    public void insert(String contact) {
        TrieNode current = root;
        for (char ch : contact.toCharArray()) {
            current.children.putIfAbsent(ch, new TrieNode());
            current = current.children.get(ch);
        }
        current.isEndOfWord = true;
    }

    public boolean search(String contact) {
        TrieNode current = root;
        for (char ch : contact.toCharArray()) {
            if (!current.children.containsKey(ch)) {
                return false;
            }
            current = current.children.get(ch);
        }
        return current.isEndOfWord;
    }

}
