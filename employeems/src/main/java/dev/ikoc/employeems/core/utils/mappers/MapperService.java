package dev.ikoc.employeems.core.utils.mappers;

import org.modelmapper.ModelMapper;

public interface MapperService {
    ModelMapper forResponse();
    ModelMapper forRequest();
}
