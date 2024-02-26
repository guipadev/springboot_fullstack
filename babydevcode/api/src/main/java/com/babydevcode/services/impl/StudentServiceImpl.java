package com.babydevcode.services.impl;

import com.babydevcode.entitys.Student;
import com.babydevcode.repositorys.StudentRepository;
import com.babydevcode.services.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StudentServiceImpl implements StudentService  {

    private final StudentRepository studentRepository;


    @Override
    public Page<Student> getStudents(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        //Page<Student> listStudents = studentRepository.findAll(pageable);
        //return listStudents;
        return studentRepository.findAll(pageable);
    }

}
