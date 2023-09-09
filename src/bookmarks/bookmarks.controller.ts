import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { Bookmark } from './bookmark.model';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';
import { JwtAuthGuard } from 'src/jwt-auth/jwt-auth.guard';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarkService: BookmarksService) {}

  @Get()
  find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
    if (Object.keys(getBookmarkDto).length) {
      return this.bookmarkService.find(getBookmarkDto);
    }
    return this.bookmarkService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string): Bookmark {
    return this.bookmarkService.findById(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  createBookmark(@Body() createBookmarkDto: CreateBookmarkDto): Bookmark {
    return this.bookmarkService.createBookmark(createBookmarkDto);
  }

  @Delete('/:id')
  deleteBookmarkById(@Param('id') id: string): void {
    return this.bookmarkService.deleteBookmarkById(id);
  }

  @Patch('/:id/description')
  updateBookmarkById(
    @Param('id') id: string,
    @Body('description') description: string,
  ) {
    return this.bookmarkService.updateBookmarkById(id, description);
  }
}
