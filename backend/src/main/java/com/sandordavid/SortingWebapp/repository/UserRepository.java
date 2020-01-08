package com.sandordavid.SortingWebapp.repository;

import com.sandordavid.SortingWebapp.domain.model.User_;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User_, Long> {

    User_ findByUsername(String username);

}
